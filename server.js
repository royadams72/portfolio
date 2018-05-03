require('zone.js/dist/zone-node');

const express = require('express');

const ngExpressEngine = require('@nguniversal/express-engine')
  .ngExpressEngine;
const fs = require('fs');

var files;
try {
  files = fs.readdirSync(`${process.cwd()}/dist-server`);
} catch (error) {
  console.error(error);
}
var mainFiles = files.filter(file => file.startsWith('main'));
var split = mainFiles[0].split('.');
var hash = '';
if (split.length > 3) hash = split[1] + '.';

const {
  ServerAppModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist-server/main.${hash}bundle`);

const app = express();

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: ServerAppModuleNgFactory
  })
);

app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.render('./dist/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`server running on ${process.env.PORT}`)
});

app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.render('./src/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});