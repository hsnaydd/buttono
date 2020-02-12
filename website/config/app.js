import paths from './paths';

const appConfig = {
  info: {
    name: 'Project Name',
    version: '0.1.0',
  },
  uncssActive: true,
  spriteFileBaseName: 'sprite',
  entry: {
    styles: [`${paths.src}/app.scss`],
    scripts: [`${paths.src}/index.js`],
    pages: `${paths.src}/templates/pages/**/*.html.twig`,
  },
};

export default appConfig;
