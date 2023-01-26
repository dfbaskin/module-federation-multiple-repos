$rootPath = Join-Path $PSScriptRoot ".." -Resolve

Push-Location -Path $rootPath

Push-Location -Path repo-one
npx nx build host-app
if(!$?) { exit }
npx nx build interop-app
if(!$?) { exit }
Pop-Location

Push-Location -Path repo-two
npm install
if(!$?) { exit }
node fixup-package-json.js
if(!$?) { exit }
npx nx build addon-app
if(!$?) { exit }
Pop-Location

Pop-Location
