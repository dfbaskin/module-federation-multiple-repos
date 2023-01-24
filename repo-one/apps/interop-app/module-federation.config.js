module.exports = {
  name: 'interop-app',
  filename: 'remoteEntry.js',
  exposes: {
    '.': 'apps/interop-app/src/remote-entry.ts',
  },
};
