import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import flexBugsFixes from 'postcss-flexbugs-fixes';

import appConfig from '../../../config/app';
import paths from '../../../config/paths';
import errorHandler from '../../utils/errorHandler';
import inlineCssImporter from '../../utils/inlineCssImporter';

export default function styles() {
  return gulp
    .src(appConfig.entry.styles, { sourcemaps: true })
    .pipe(sass({ precision: 10, importer: inlineCssImporter }).on('error', errorHandler))
    .pipe(postcss([autoprefixer({ cascade: false }), flexBugsFixes()]))
    .pipe(
      gulp.dest(`${paths.styleguide.dist}/${paths.styleguide.assets.styles}`, {
        sourcemaps: '.',
      }),
    )
    .on('error', errorHandler);
}
