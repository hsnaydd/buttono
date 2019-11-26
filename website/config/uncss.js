import paths from './paths';

export default {
  // We used dist path here because of uncss only works in production
  html: [`${paths.dist}/*.html`],
  htmlroot: paths.dist,
  ignore: [new RegExp('^(.[a-z-_.]*)?.(is|has)-.*'), new RegExp('^(.?[a-z-_.[]+)?disabled.*')],
};
