const nunjucks = require('nunjucks');
const render = require('posthtml-render');
const parser = require('posthtml-parser');
const WithExtension = require('@allmarkedup/nunjucks-with');
const Util = require('./source/lib/util.cjs');
const { readFile } = require('fs').promises;

const layoutsDir = `${__dirname}/source/layouts`;
const isDev = process.env.NODE_ENV === 'development';

module.exports = () => ({
  plugins: [
    (() => async (tree) => {
      const page = tree.options.from.replace(/^.*pages(\\+|\/+)(.*)\.njk$/, '$2');
      let data = {
        page,
        isDev,
        errors: []
      };

      const applyData = (fn) => eval(`(${fn.replace(/;\s*$/, '')})`)(data, Util);

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
      env.addGlobal('getContext', function() {
        return this.ctx;
      });
      env.addFilter('keys', Object.keys);
      for (const utilName of Object.keys(Util)) {
        env.addFilter(utilName, Util[utilName]);
      }

      return parser(nunjucks.renderString(render(tree), data));
    })(),
    require('posthtml-w3c')(),
    require('htmlnano')({ collapseWhitespace: 'aggressive' })
  ]
});
