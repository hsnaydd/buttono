import gulp, { parallel } from 'gulp';
import dirSync from 'gulp-directory-sync';

import appConfig from '../../config/app';
import paths from '../../config/paths';
import { envPath } from '../../config/env';
import errorHandler from '../utils/errorHandler';

export function syncFonts() {
  return gulp
    .src('dummy.ext', { allowEmpty: true })
    .pipe(
      dirSync(`${paths.fonts}`, `${envPath}/${paths.assets.fonts}`, {
        ignore: '.gitkeep',
      }),
    )
    .on('error', errorHandler);
}

export function syncImages() {
  return gulp
    .src('dummy.ext', { allowEmpty: true })
    .pipe(
      dirSync(`${paths.img}`, `${envPath}/${paths.assets.img}`, {
        ignore: ['.gitkeep'],
        nodelete: `${appConfig.spriteFileBaseName}.svg`,
      }),
    )
    .on('error', errorHandler);
}
export default parallel(syncFonts, syncImages);
