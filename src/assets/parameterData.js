export default class ParameterData {

  name = 'Parameter';
  pattern = '';
  item = '';
  flags = {
    i: true,
    g: false,
    m: false,
  };

  constructor ({ name = 'Parameter', pattern = '', item = '', flags = { i: true, g: false, m: false, } }) {
    this.name = name;
    this.pattern = pattern;
    this.item = item;
    this.flags = flags;
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