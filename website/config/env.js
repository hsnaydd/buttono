import fs from 'fs';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

import paths from './paths';

const NODE_ENV = process.env.NODE_ENV || 'development';

const dotenvFiles = [
  `.env.${NODE_ENV}.local`,
  `.env.${NODE_ENV}`,
  NODE_ENV !== 'test' && '.env.local',
  '.env',
].filter(Boolean);

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    dotenvExpand(dotenv.config({ path: dotenvFile }));
  }
});

export const isProduction = NODE_ENV === 'production';

export const envPath = isProduction ? paths.dist : paths.dev;

export default NODE_ENV;
