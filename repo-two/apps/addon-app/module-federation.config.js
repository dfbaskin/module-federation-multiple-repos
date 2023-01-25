module.exports = {
  name: 'addon-app',
  filename: 'remoteEntry.js',
  exposes: {
    '.': 'apps/addon-app/src/remote-entry.ts',
  },
};
