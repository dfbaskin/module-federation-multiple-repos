module.exports = {
  name: 'addon-app',
  exposes: {
    '.': 'apps/addon-app/src/remote-entry.ts',
  },
};
