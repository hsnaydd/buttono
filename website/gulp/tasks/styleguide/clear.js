import { series } from 'gulp';
import del from 'del';

import paths from '../../../config/paths';

export function clearDist() {
  return del([`${paths.styleguide.dist}/*`], { dot: true });
}

export default series(clearDist);
