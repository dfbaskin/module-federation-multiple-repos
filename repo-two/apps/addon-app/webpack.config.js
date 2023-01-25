const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(withNx(), withReact(), async (config) => {
  const fn = await withModuleFederation({
    ...moduleFederationConfig,
  });
  return fn(config);
});
