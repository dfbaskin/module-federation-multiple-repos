# Module Federation - Multiple Repos w/Shared Code

Experiment using Module Federation with shared code between repositories.

- Change to `repo-one` path.
- `npm install`
- `npx nx build host-app`
- `npx nx build interop-app`
- Change to `repo-two` path.
- `npm install`
- `node fixup-package-json.js`
- `npx nx build addon-app`
