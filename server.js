require('zone.js/dist/zone-node');
require('reflect-metadata');
const {
  renderModuleFactory
} = require('@angular/platform-server');
const express = require('express');
const {
  readFileSync
} = require('fs');
const {
  enableProdMode
} = require('@angular/core');

const {
  AppServerModuleNgFactory
} = require('./dist-server/main.bundle');

enableProdMode();

const app = express();

const indexHtml = readFileSync(__dirname + '/dist/index.html', 'utf-8').toString();


app.get('*.*', express.static(__dirname + '/dist', {
  maxAge: '1y'
}));

app.route('*').get((req, res) => {

  renderModuleFactory(AppServerModuleNgFactory, {
      document: indexHtml,
      url: req.url
    })
    .then(html => {
      res.status(200).send(html);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });

});

app.listen(8080, () => {
  console.log(`Angular Universal Node Express server listening on http://localhost:8080`);
});