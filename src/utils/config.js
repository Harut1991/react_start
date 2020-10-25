import { Process as process } from 'node/process';

const config = {
  isEnvDevelopment: process.env.REACT_APP_NODE_ENV === 'development',
  api: process.env.REACT_APP_API_URL
};

export default config;
