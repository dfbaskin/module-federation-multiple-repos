const { readFileSync, writeFileSync } = require('fs');

let content = readFileSync('package.json', 'utf8');
let pkg = JSON.parse(content);
for(const [name] of [...Object.entries(pkg.dependencies)]) {
  if(name.startsWith('@example/')) {
    pkg.dependencies[name] = '^0.0.1';
  }
}

pkg = {
  '//': [
    "******************************************************",
    "* This file has been updated so that it that it will *",
    "* build and load correctly.                          *",
    "*                                                    *",
    "*           DO NOT CHECK IN THESE CHANGES!!          *",
    "*                                                    *",
    "******************************************************",
  ],
  ...pkg
};

content = JSON.stringify(pkg, null, 2);
writeFileSync('package.json', content, 'utf8');
