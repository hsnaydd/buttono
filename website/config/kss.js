import paths from './paths';

export default {
  source: [`${paths.src}/`],
  destination: `${paths.styleguide.dist}`,
  custom: [],
  extend: `${paths.styleguide.extend}`,
  // The css and js paths are URLs, like '/misc/jquery.js'.
  // The following paths are relative to the generated style guide.
  css: [`${paths.styleguide.assets.styles}/app.css`],
  js: [`${paths.styleguide.assets.scripts}/app.js`],
  verbose: false,
  builder: 'node_modules/@atolye15/kss-node-twig-builder',
  homepage: '../../README.md',
  title: 'Atölye Style Guide',
  namespace: [],
  // This following option is a special option for `@atolye15/kss-node-twig-builder`
  // May not work with other builders
  // Example:
  // [
  //   {
  //     name: 'function_name',
  //     func: () => {}
  //   }
  // ]
  functions: [],
};
