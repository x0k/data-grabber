function flagsToString (flags) {
  let result = '';
  for (let key of Object.keys(flags)) {
    if (flags[key])
      result += key;
  }
  return result;
}

class Expression {

  name;
  expression;
  item;

  constructor (parameter) {
    this.name = parameter.name;
    this.item = parameter.item;
    this.expression = new RegExp(parameter.pattern, flagsToString(parameter.flags));
  }

  apply (text) {
    let result = '';
    text.replace(this.expression, match => {
      result += match.replace(this.expression, this.item);
    });
    return result;
  }

}

function buildGrabber (parameters, buildString) {
  let expressions = parameters.map(parameter => new Expression(parameter));
  return ({ URL, text }) => {
    let values = expressions.reduce((values, exp) => {
      values[exp.name] = exp.apply(text);
      return values;
    }, { URL });
    return buildString.replace(/%(.+?)%/g, (match, name) => values[name]);
  };
}

export async function grab (fetch, links, parameters, itemsContainer) {
  const grabber = buildGrabber(parameters, itemsContainer);
  const result = await Promise.all(links.map(link => fetch(link)))
    .then(result => result.map((response, id) => ({ URL: links[id], text: response.result.response.result })));
  return result.map(data => grabber(data));
}