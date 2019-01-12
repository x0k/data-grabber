class Expression {

  name;
  expression;
  item;

  constructor (parameter) {
    this.name = parameter.name;
    this.item = parameter.item;
    this.expression = new RegExp(parameter.pattern, parameter.flagsToString());
  }

  apply (text) {
    let result = '';
    text.replace(this.expression, match => {
      result += match.replace(this.expression, this.item);
    });
    return result;
  }

}

export default class Grabber {

  static buildGrabber (parameters, buildString) {
    let expressions = parameters.map(parameter => new Expression(parameter));
    return text => {
      let values = expressions.reduce((values, exp) => {
        values[exp.name] = exp.apply(text);
        return values;
      }, {});
      return buildString.replace(/%(.+?)%/g, (match, name) => values[name]);
    };
  }

  static async grab (fetch, links, parameters, itemsContainer) {
    const grabber = Grabber.buildGrabber(parameters, itemsContainer);
    const result = await Promise.all(links.map(link => fetch(link)))
      .then(result => result.map(response => response.result.response.result));
    return result.map(text => grabber(text));
  }

}