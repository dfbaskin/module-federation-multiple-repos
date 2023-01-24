const { composePlugins, withNx, withWeb } = require('@nrwl/webpack');
const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withWeb(), async (config) => {
  const fn = await withModuleFederation({
    ...moduleFederationConfig,
  });
  return fn(config);
});
