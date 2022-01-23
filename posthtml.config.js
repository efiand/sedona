const nunjucks = require('nunjucks');
const render = require('posthtml-render');
const parser = require('posthtml-parser');
const WithExtension = require('@allmarkedup/nunjucks-with');
const { readFile } = require('fs').promises;

const layoutsDir = `${__dirname}/source/layouts`;
const isDev = process.env.NODE_ENV === 'development';
const Lib = {
  getObjectKeys(obj) {
    return Object.keys(obj);
  },
  setObjectProp(obj = {}, key, value = null) {
    obj[key] = value;
    return obj;
  },
  getFilenameWithoutExt(filename) {
    return filename.slice(0, filename.lastIndexOf('.'));
  },
  dotify(str) {
    if (/\.|\?|!|,|:$/.test(str)) {
      return str;
    }
    return `${str}.`;
  }
};

module.exports = () => ({
  plugins: [
    (() => async (tree) => {
      const page = tree.options.from.replace(/^.*pages(\\+|\/+)(.*)\.njk$/, '$2');
      let data = {
        page,
        isDev,
        errors: []
      };

      const applyData = (fn) => eval(`(${fn.replace(/;\s*$/, '')})`)(data, Lib);

      try {
        // Перечитываем код логики проекта при каждом изменении
        const handleMainData = await readFile(`${layoutsDir}/main.js`, 'utf-8');
        data = {
          ...data,
          ...applyData(handleMainData)
        };
      } catch (err) {
        data.errors.push(err);
      }

      try {
        // Перечитываем код логики страницы при каждом изменении
        const handlePageData = await readFile(`${layoutsDir}/pages/${page}.js`, 'utf-8');
        data = {
          ...data,
          ...applyData(handlePageData)
        };
      } catch (err) {
        data.errors.push(err);
      }

      const env = nunjucks.configure('source', { autoescape: false });

      env.addExtension('WithExtension', new WithExtension());
      env.addFilter('keys', Lib.getObjectKeys);
      env.addFilter('setProp', Lib.setObjectProp);
      env.addFilter('dropExt', Lib.getFilenameWithoutExt);
      env.addFilter('dotify', Lib.dotify);

      return parser(nunjucks.renderString(render(tree), data));
    })(),
    require('posthtml-w3c')(),
    require('htmlnano')({ collapseWhitespace: 'aggressive' })
  ]
});
