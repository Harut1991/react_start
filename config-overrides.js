const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@models': 'src/models',
    '@assets': 'src/assets',
    '@store': 'src/store',
    '@core': 'src/core',
    '@hooks': 'src/hooks',
    '@utils': 'src/utils',
    '@views': 'src/views',
    '@components': 'src/views/components',
    '@containers': 'src/views/containers',
    '@config': 'src/config',
    '@pages': 'src/views/pages'
  })(config);

  return config;
};
