const render = require('posthtml-render');
const parser = require('posthtml-parser');
const { ServerUtil } = require('./source/lib/index.cjs');

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

      // Перечитываем код логики проекта при каждом изменении
      data = await ServerUtil.modifyData(data, `${layoutsDir}/main.js`);

      // Перечитываем код логики страницы при каждом изменении
      data = await ServerUtil.modifyData(data, `${layoutsDir}/pages/${page}.js`);

      return parser(ServerUtil.renderNjk(render(tree), data));
    })(),
    require('posthtml-w3c')(),
    require('htmlnano')({ collapseWhitespace: 'aggressive' })
  ]
});
