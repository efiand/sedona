const { src, dest, watch, series, parallel } = require('gulp');
const nunjucks = require('nunjucks');
const prettier = require('gulp-prettier');
const imagemin = require('gulp-imagemin');
const server = require('browser-sync').create();
const postcssReporter = require('postcss-reporter')({
  clearAllMessages: true,
  throwError: false
});

const buildHTML = () => src(['source/**/*.html', '!source/**/_*.html'])
  .pipe(require('gulp-posthtml')([
    (() => (tree) => {
      nunjucks.configure('source', { autoescape: false });

      return require('posthtml-parser')(nunjucks.renderString(require('posthtml-render')(tree), {}));
    })(),
    require('posthtml-w3c')()
  ]))
  .pipe(prettier())
  .pipe(dest('.'));

const buildCSS = () => src(['source/css/**/*.css', '!source/css/**/_*.css'])
  .pipe(require('gulp-postcss')([
    require('postcss-easy-import')(),
    require('stylelint')({ fix: true }),
    require('autoprefixer')(),
    postcssReporter
  ]))
  .pipe(dest('css'));

const optimizeImages = () => src('source/img/**/*.{svg,png,jpg}')
  .pipe(imagemin([
    imagemin.svgo({
      plugins: [
        {
          name: 'removeViewBox',
          active: false
        },
        {
          name: 'removeTitle',
          active: true
        },
        {
          name: 'cleanupNumericValues',
          params: { floatPrecision: 2 }
        },
        {
          name: 'convertPathData',
          params: { floatPrecision: 2 }
        },
        {
          name: 'convertTransform',
          params: { floatPrecision: 2 }
        },
        {
          name: 'cleanupListOfValues',
          params: { floatPrecision: 2 }
        }
      ]
    }),
    imagemin.mozjpeg({ quality: 75, progressive: true }),
    imagemin.optipng()
  ]))
  .pipe(dest('img'));

const reload = (done) => {
  server.reload();
  done();
};

const fixHTML = () => src('source/**/*.html')
  .pipe(prettier())
  .pipe(dest('source'));

const fixCSS = () => src('source/css/**/*.css')
  .pipe(require('gulp-postcss')([
    require('stylelint')({ fix: true }),
    postcssReporter
  ]))
  .pipe(dest('source/css'));

const startServer = () => {
  server.init({
    cors: true,
    server: '.',
    ui: false
  });

  watch('source/**/*.html', series(buildHTML, reload));
  watch('source/css/**/*.css', series(buildCSS, reload));
  watch('source/img/**/*.{svg,png,jpg}', series(optimizeImages, reload));
};

exports.fix = series(fixHTML, fixCSS);
exports.default = series(parallel(buildHTML, buildCSS, optimizeImages), startServer);
