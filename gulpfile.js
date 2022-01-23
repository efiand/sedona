import gulp from 'gulp';
import posthtml from 'gulp-posthtml';
import postcss from 'gulp-postcss';
import vinylNamed from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config.js';
import imagemin from 'gulp-imagemin';
import svgo from 'imagemin-svgo';
import svgoConfig from './svgo.config.js';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import clean from 'gulp-clean';
import webp from 'gulp-webp';
import stackSprite from 'gulp-svg-sprite';
import eslint from 'gulp-eslint';
import lintspaces from 'gulp-lintspaces';
import rename from 'gulp-rename';
import browsersync from 'browser-sync';
import del from 'del';

const { src, dest, watch, series, parallel } = gulp;
const server = browsersync.create();
const IS_DEV = process.env.NODE_ENV === 'development';
const checkLintspaces = () => lintspaces({
  editorconfig: '.editorconfig'
});

const Path = {
  DIST: 'public',
  Build: {
    CSS: ['source/styles/*.css'],
    JS: ['source/scripts/*.js']
  },
  Watch: {
    HTML: 'source/**/*.njk',
    CSS: 'source/**/*.css',
    JS: ['*.{js,cjs}', 'source/**/*.js'],
    IMG: 'place/images/**/*.{svg,png,jpg}',
    IMG_DEST: 'public/images/**/*.{png,jpg}',
    ICONS: 'place/icons/**/*.{svg,png}',
    SPRITE: 'source/icons/*.svg'
  }
};
if (!IS_DEV) {
  Path.Build.CSS.push('!source/styles/entries/dev.css');
  Path.Build.JS.push('!source/scripts/entries/dev.js');
}

const buildHTML = () => src('source/layouts/pages/**/*.njk')
  .pipe(posthtml())
  .pipe(rename({ extname: '.html' }))
  .pipe(dest(Path.DIST));

const buildCSS = () => src(Path.Build.CSS)
  .pipe(postcss())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest(`${Path.DIST}/styles`));

const buildJS = () => src(Path.Build.JS)
  .pipe(vinylNamed())
  .pipe(webpackStream(webpackConfig, webpack))
  .pipe(dest(`${Path.DIST}/scripts`));

const saveImages = () => src(Path.Watch.IMG)
  .pipe(imagemin([
    svgo(svgoConfig),
    mozjpeg({ quality: 75, progressive: true }),
    pngquant()
  ]))
  .pipe(clean())
  .pipe(dest(`${Path.DIST}/images`));

const createWebp = () => src(Path.Watch.IMG_DEST)
  .pipe(webp({ quality: 80 }))
  .pipe(dest(`${Path.DIST}/images`));

const optimizeIcons = () => src(Path.Watch.ICONS)
  .pipe(imagemin([
    svgo(svgoConfig),
    pngquant()
  ]))
  .pipe(clean())
  .pipe(dest('source/icons'));

const buildSprite = () => src(Path.Watch.SPRITE)
  .pipe(stackSprite({ mode: { stack: true } }))
  .pipe(rename('sprite.min.svg'))
  .pipe(dest(`${Path.DIST}/images`));

const testHTML = () => src(Path.Watch.HTML)
  .pipe(checkLintspaces())
  .pipe(lintspaces.reporter());

const testCSS = () => src(Path.Watch.CSS)
  .pipe(postcss())
  .pipe(checkLintspaces())
  .pipe(lintspaces.reporter());

const testJS = () => src(Path.Watch.JS)
  .pipe(eslint({
    fix: false
  }))
  .pipe(eslint.format())
  .pipe(checkLintspaces())
  .pipe(lintspaces.reporter());

const copyPP = () => src('source/pixelperfect/*.{jpg,png,svg}')
  .pipe(dest(`${Path.DIST}/pixelperfect`));

const reload = (done) => {
  server.reload();
  done();
};

const startServer = () => {
  server.init({
    cors: true,
    server: Path.DIST,
    ui: false,
    open: false
  });

  watch(Path.Watch.HTML, series(testHTML, buildHTML, reload));
  watch(Path.Watch.CSS, series(testCSS, buildCSS, reload));
  watch('source/layouts/**/*.js', series(testJS, buildHTML, reload));
  watch('source/{components,scripts}/**/*.js', series(testJS, buildJS, reload));
  watch('*.{js,cjs}', testJS);
  watch(Path.Watch.IMG, saveImages);
  watch(Path.Watch.IMG_DEST, series(createWebp, reload));
  watch(Path.Watch.ICONS, series(optimizeIcons, buildCSS, reload));
  watch(Path.Watch.SPRITE, series(buildSprite, reload));
};

const cleanDest = () => del([
  `${Path.DIST}/**/*.{html,css,js,webp}`,
  `${Path.DIST}/images/sprite.min.svg`,
  `${Path.DIST}/pixelperfect`
]);

export const test = parallel(testHTML, testCSS, testJS);
const prepare = parallel(test, cleanDest, saveImages, optimizeIcons);
const compile = parallel(buildHTML, buildCSS, buildJS, createWebp, buildSprite);
export const build = series(prepare, compile);
export default series(build, copyPP, startServer);
