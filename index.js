require('marko/node-require').install();
require('./template/mainTemplate.marko').render({}, process.stdout);