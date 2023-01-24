module.exports = {
  name: "host-app",
  remotes: [
    ["interop-app", "http://localhost:4201/remoteEntry.js"],
  ],
};
