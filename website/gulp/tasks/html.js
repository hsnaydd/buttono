import gulp from 'gulp';
import twig from 'gulp-twig';
import rename from 'gulp-rename';

import appConfig from '../../config/app';
import namespaces from '../../config/namespaces';
import { envPath } from '../../config/env';
import errorHandler from '../utils/errorHandler';
import spriteStore from '../utils/spriteStore';
import functions from '../../twig/functions';

function flattenFilePath(filePath) {
  if (filePath.dirname === '.') {
    return filePath;
  }

  return Object.assign(filePath, {
    basename: `${filePath.dirname.split('/').join('-')}-${filePath.basename}`,
    dirname: '.',
  });
}

export default function html() {
  return gulp
    .src(appConfig.entry.pages)
    .pipe(
      twig({
        functions,
        data: {
          svgSprite: spriteStore.getSprite(),
        },
        onError: errorHandler,
        twigParameters: {
          strict_variables: true,
          namespaces,
        },
      }),
    )
    .pipe(
      rename(filePath =>
        flattenFilePath(
          // Here we use Object.assign instead of object spread operator(...) because
          // we should not lose the object reference. Otherwise, rename will not work correctly
          Object.assign(filePath, { basename: filePath.basename.replace(/(\.html)$/, '') }),
        ),
      ),
    )
    .pipe(gulp.dest(envPath))
    .on('error', errorHandler);
}
