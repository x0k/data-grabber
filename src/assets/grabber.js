class Expression {

  name;
  expression;

  constructor (parameter) {
    this.name = parameter.name;
    this.expression = new RegExp(parameter.pattern, parameter.flagsToString());
  }

  apply (text) {
    let matches = text.match(this.expression);
    return matches[1];
  }

}

class Builder {

  string;
  parameters = [];

  constructor (buildString) {
    this.string = buildString;
    let regexp = /%(.+?)%/g;
    let result;
    while (result = regexp.exec(buildString)) {
      let name = result[1];
      this.parameters.push({ name, regexp: new RegExp(`%${name}%`, 'g') });
    }
  }

  build (values) {
    let result = this.string.slice();
    for (let parameter of this.parameters) {
      result = result.replace(parameter.regexp, values[parameter.name]);
    }
    return result;
  }

}

export default class Grabber {

  static grab (parameters, buildString) {
    let expressions = parameters.map(parameter => new Expression(parameter));
    let builder = new Builder(buildString);
    return text => {
      let values = expressions.reduce((values, exp) => {
        values[exp.name] = exp.apply(text);
        return values;
      }, {});
      return builder.build(values);
    };
  }

}