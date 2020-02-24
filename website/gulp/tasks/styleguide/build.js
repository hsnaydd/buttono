import { series, parallel } from 'gulp';

import notifier from '../../utils/notifier';
import { successLogger } from '../../utils/logger';

import { clearDist } from './clear';
import scripts from './scripts';
import styles from './styles';
import copy from './copy';
import sprite from './sprite';
import generate from './generate';

function completed(cb) {
  notifier('Styleguide compiled successfully.');

  successLogger.log(
    '\n==============================================\n' +
      'Styleguide compiled successfully.' +
      '\n==============================================\n',
  );
  cb();
}

export default series(clearDist, sprite, parallel(scripts, styles, copy), generate, completed);
