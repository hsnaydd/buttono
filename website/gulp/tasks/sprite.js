import gulp from 'gulp';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
import through2 from 'through2';

import appConfig from '../../config/app';
import paths from '../../config/paths';
import { envPath } from '../../config/env';
import spriteStore from '../utils/spriteStore';
import errorHandler from '../utils/errorHandler';

export default function sprite() {
  return gulp
    .src(`${paths.icons}/**/*.svg`)
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(
      through2.obj((file, encoding, callback) => {
        spriteStore.setSprite(file.contents.toString());
        callback(null, file);
      }),
    )
    .pipe(rename({ basename: appConfig.spriteFileBaseName }))
    .pipe(gulp.dest(`${envPath}/${paths.assets.img}`))
    .on('error', errorHandler);
}
