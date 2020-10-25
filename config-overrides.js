const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@models': 'src/models',
    '@assets': 'src/assets',
    '@store': 'src/store',
    '@core': 'src/core',
    '@routing': 'src/routing',
    '@helpers': 'src/helpers',
    '@hooks': 'src/hooks',
    '@utils': 'src/utils',
    '@views': 'src/views',
    '@components': 'src/views/components',
    '@containers': 'src/views/containers',
    '@pages': 'src/views/pages'
  })(config);

  return config;
};
