import gulp, { parallel } from 'gulp';

import paths from '../../config/paths';
import { envPath } from '../../config/env';

export function copyImages() {
  return gulp.src(`${paths.img}/**/*`).pipe(gulp.dest(`${envPath}/${paths.assets.img}`));
}

export function copyFonts() {
  return gulp.src(`${paths.fonts}/**/*`).pipe(gulp.dest(`${envPath}/${paths.assets.fonts}`));
}

export function copyPublic() {
  return gulp
    .src([`${paths.public}/**/*`, `!${paths.public}/.gitkeep`], { dot: true })
    .pipe(gulp.dest(`${envPath}/`));
}

export default parallel(copyImages, copyFonts, copyPublic);
