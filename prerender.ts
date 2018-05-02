
// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';
require('zone.js/dist/zone-node');
require('reflect-metadata');
const { renderModuleFactory } = require('@angular/platform-server');
const { writeFileSync } = require('fs');

const { AppServerModuleNgFactory } = require('./dist-server/main.bundle');


renderModuleFactory(AppServerModuleNgFactory, {
  document: '<app-root></app-root>',
  url: '/'
})
  .then(html => {
    console.log('Pre-rendering successful, saving prerender.html');
    writeFileSync('./prerender.html', html);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  })
