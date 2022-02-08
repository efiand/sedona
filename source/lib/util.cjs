// Утилиты в формате CommonJS для работы posthtml и webpack

module.exports = {
  setProp(obj = {}, key, value = null) {
    obj[key] = value;
    return obj;
  },
  dropExt(filename) {
    return filename.slice(0, filename.lastIndexOf('.'));
  },
  punctify(str, sign = '.') {
    if (/(\.|\?|!|,|:|…)$/.test(str)) {
      return str;
    }
    return str + sign;
  },
  numberize(str) {
    const numberized = str.replace(/\D/g, '');
    return str.slice(0, 1) === '+' ? `+${numberized}` : numberized;
  }
};
