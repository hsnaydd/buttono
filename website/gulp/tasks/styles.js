import gulp from 'gulp';
import lazypipe from 'lazypipe';
import postcss from 'gulp-postcss';
import uncss from 'uncss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import flexBugsFixes from 'postcss-flexbugs-fixes';
import cssnano from 'cssnano';

import appConfig from '../../config/app';
import paths from '../../config/paths';
import uncssOptions from '../../config/uncss';
import { isProduction, envPath } from '../../config/env';
import noop from '../utils/noop';
import errorHandler from '../utils/errorHandler';
import inlineCssImporter from '../utils/inlineCssImporter';

export default function styles(cb) {
  const stylesMinChannel = lazypipe()
    .pipe(postcss, [
      appConfig.uncssActive ? uncss.postcssPlugin(uncssOptions) : () => {},
      cssnano({ discardComments: { removeAll: true } }),
    ])
    .pipe(rename, { suffix: '.min' })
    .pipe(gulp.dest, `${envPath}/${paths.assets.css}`);

  /**
   * Warning:
   *   1. Returning the gulp stream causes an uncompleted task, I suppose because of the lazypipe.
   *      So we used the cb function to finish the task.
   *   2. For best performance, don't add Sass partials to `gulp.src`
   */

  return gulp
    .src(appConfig.entry.styles, { sourcemaps: true })
    .pipe(sass({ precision: 10, importer: inlineCssImporter }).on('error', errorHandler))
    .pipe(
      postcss([
        autoprefixer({ cascade: false }),
        flexBugsFixes(),
        isProduction ? mqpacker() : () => {},
      ]),
    )

    .pipe(
      gulp.dest(`${envPath}/${paths.assets.css}`, {
        sourcemaps: isProduction ? false : '.',
      }),
    )
    .pipe(isProduction ? stylesMinChannel() : noop())
    .on('error', errorHandler)
    .on('end', cb);
}
