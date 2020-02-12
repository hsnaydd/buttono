import gulp, { parallel } from 'gulp';

import paths from '../../../config/paths';

export function copyImages() {
  return gulp
    .src(`${paths.img}/**/*`)
    .pipe(gulp.dest(`${paths.styleguide.dist}/${paths.styleguide.assets.images}`));
}

export function copyFonts() {
  return gulp
    .src(`${paths.fonts}/**/*`)
    .pipe(gulp.dest(`${paths.styleguide.dist}/${paths.styleguide.assets.fonts}`));
}

export default parallel(copyImages, copyFonts);
