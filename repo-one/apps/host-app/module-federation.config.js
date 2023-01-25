const deps = require('../../package.json').dependencies;

module.exports = {
  name: "host-app",
  remotes: [
    ["interop-app", "http://localhost:4201/remoteEntry.js"],
    ["addon-app", "http://localhost:4202/remoteEntry.js"],
  ]
};
