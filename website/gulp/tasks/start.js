import { watch, series } from 'gulp';
import browserSyncBase from 'browser-sync';

import appConfig from '../../config/app';
import paths from '../../config/paths';
import { isProduction, envPath } from '../../config/env';
import skippable from '../utils/skippable';

import html from './html';
import styles from './styles';
import scripts from './scripts';
import { syncFonts, syncImages } from './sync';
import sprite from './sprite';
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
    server: [`${envPath}`],
    port: process.env.PORT,
    ghostMode: false,
    browser: process.env.BROWSER,
  });

  process.env.WATCHING = true;

  watch(
    [`${paths.src}/**/*.twig`],
    { cwd: './' },
    series(html, skippable(isProduction && appConfig.uncssActive, styles), reload),
  );

  watch(`${paths.icons}/**/*.svg`, series(sprite, html, reload));

  watch(`${paths.src}/**/*.scss`, { cwd: './' }, series(styles, reload));

  watch(`${paths.fonts}/**/*`, series(syncFonts, reload));

  watch(`${paths.src}/**/*.js`, { cwd: './' }, series(scripts, reload));

  watch(`${paths.img}/**/*`, series(syncImages, reload));
}

export default series(build, start);
