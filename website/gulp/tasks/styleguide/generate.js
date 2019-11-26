import kss from 'kss';

import namespaces from '../../../config/namespaces';
import kssOptions from '../../../config/kss';
import spriteStore from '../../utils/spriteStore';
import errorHandler from '../../utils/errorHandler';
import functions from '../../../twig/functions';

const namespacesForKss = Object.keys(namespaces).reduce((accumulator, currentValue) => {
  accumulator.push(`${currentValue}:${namespaces[currentValue]}`);
  return accumulator;
}, []);

export default function generate() {
  return kss({
    ...kssOptions,
    svgSprite: spriteStore.getSprite(),
    namespace: [...kssOptions.namespace, ...namespacesForKss],
    functions: [...kssOptions.functions, ...functions],
  }).catch(errorHandler);
}
