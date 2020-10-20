// This file created for absolutely general configurations
// If you considered to add getPlayers method's route url of the aml, this file is not the correct place  #see 'core/settings'

const config = {
  isEnvDevelopment: process.env.REACT_APP_NODE_ENV === 'development',
  api: process.env.REACT_APP_API_URL,
};

export default config;
