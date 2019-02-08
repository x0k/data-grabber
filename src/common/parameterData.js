export default class ParameterData {

  name = 'Parameter';
  pattern = '';
  item = '';
  flags = {
    i: true,
    g: false,
    m: false,
    s: false,
  };

  constructor ({ name = 'Parameter', pattern = '', item = '', flags = null }) {
    this.name = name;
    this.pattern = pattern;
    this.item = item;
    if (flags) {
      this.flags = { ...this.flags, ...flags };
    }
  }

  flagsToString () {
    let result = '';
    for (let key of Object.keys(this.flags)) {
      if (this.flags[key])
        result += key;
    }
    return result;
  }

}