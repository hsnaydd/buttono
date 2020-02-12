import { watch, series } from 'gulp';
import browserSyncBase from 'browser-sync';

import paths from '../../../config/paths';

import styles from './styles';
import scripts from './scripts';
import { syncFonts, syncImages } from './sync';
import sprite from './sprite';
import generate from './generate';
import build from './build';

const browserSync = browserSyncBase.create();

function reload(cb) {
  browserSync.reload();
  cb();
}

function start() {
  // See the following link for more options
  // https://www.browsersync.io/docs/options
  browserSync.init({
    notify: false,
    logPrefix: 'WSK',
    server: [`${paths.styleguide.dist}`],
    port: process.env.STYLEGUIDE_PORT,
    browser: process.env.BROWSER,
    ghostMode: false,
  });

  process.env.WATCHING = true;

  watch(`${paths.src}/**/*.twig`, { cwd: './' }, series(generate, reload));

  watch(`${paths.icons}/**/*.svg`, series(sprite, generate, reload));

  watch(`${paths.src}/**/*.scss`, { cwd: './' }, series(styles, generate, reload));

  watch(`${paths.fonts}/**/*`, series(syncFonts, reload));

  watch(`${paths.src}/**/*.js`, { cwd: './' }, series(scripts, generate, reload));

  watch(`${paths.img}/**/*`, series(syncImages, reload));
}

export default series(build, start);
