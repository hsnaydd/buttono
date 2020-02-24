import { rollup } from 'rollup';
import rollupOptions from '../../config/rollup.config';

import errorHandler from '../utils/errorHandler';

const { output: rollupOutputOptions, ...rollupInputOptions } = rollupOptions;

export default function scripts() {
  return rollup(rollupInputOptions)
    .then(bundle => bundle.write(rollupOutputOptions))
    .catch(errorHandler);
}
