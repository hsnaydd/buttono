import gulp, { parallel } from 'gulp';
import dirSync from 'gulp-directory-sync';

import appConfig from '../../../config/app';
import paths from '../../../config/paths';
import errorHandler from '../../utils/errorHandler';

export function syncFonts() {
  return gulp
    .src('dummy.ext', { allowEmpty: true })
    .pipe(
      dirSync(`${paths.fonts}`, `${paths.styleguide.dist}/${paths.styleguide.assets.fonts}`, {
        ignore: '.gitkeep',
      }),
    )
    .on('error', errorHandler);
}

export function syncImages() {
  return gulp
    .src('dummy.ext', { allowEmpty: true })
    .pipe(
      dirSync(`${paths.img}`, `${paths.dist}/${paths.assets.images}`, {
        ignore: ['.gitkeep'],
        nodelete: `${appConfig.spriteFileBaseName}`,
      }),
    )
    .on('error', errorHandler);
}
export default parallel(syncFonts, syncImages);
