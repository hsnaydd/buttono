import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import cx from 'classnames';

import { isProduction, envPath } from '../config/env';

export default [
  {
    name: 'html_classes',
    func: (...args) =>
      cx(...args)
        // remove "_keys" which added by Twig
        .split(' ')
        .filter(k => k !== '_keys')
        .join(' '),
  },
  {
    name: 'html_attributes',
    func: obj =>
      Object.keys(obj)
        .filter(k => k !== '_keys') // remove "_keys" property which added by Twig
        .reduce((acc, cur) => {
          if (typeof obj[cur] === 'boolean') {
            return obj[cur] ? `${acc} ${cur}` : `${acc}`;
          }
          return `${acc} ${cur}="${obj[cur]}"`;
        }, '')
        .trim(),
  },
  {
    name: 'asset',
    func: file => path.resolve(__dirname, `/${envPath}/`, file),
  },
  {
    name: 'is_file_exists',
    func: filePath => fs.existsSync(path.resolve(__dirname, path.dirname(this.path), filePath)),
  },
  {
    name: 'is_production',
    func: () => isProduction,
  },
];
