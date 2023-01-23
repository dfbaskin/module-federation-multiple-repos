module.exports = {
  name: 'interop-app',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
