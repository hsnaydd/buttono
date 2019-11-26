import { rollup } from 'rollup';
import errorHandler from '../../utils/errorHandler';

import rollupOptionsStyleguide from '../../../config/rollup.config.styleguide';

const { output: rollupOutputOptions, ...rollupInputOptions } = rollupOptionsStyleguide;

export default function scripts() {
  return rollup(rollupInputOptions)
    .then(bundle => bundle.write(rollupOutputOptions))
    .catch(errorHandler);
}
