require('zone.js/dist/zone-node');

const express = require('express');
const {
  provideModuleMap
} = require('@nguniversal/module-map-ngfactory-loader');

const ngExpressEngine = require('@nguniversal/express-engine')
  .ngExpressEngine;
const fs = require('fs');

const {
  ServerAppModuleNgFactory,
  LAZY_MODULE_MAP
} = require(`./dist-server/main.bundle`);
const provider = provideModuleMap(LAZY_MODULE_MAP);

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

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: ServerAppModuleNgFactory,
  providers: [provider]
}));

app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  // console.time("hdhdhd");
  res.render('./dist/index', {
    req: req,
    res: res

  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});
app.get('/*', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.render('./src/index', {
    req: req,
    res: res
  });
  console.timeEnd(`GET: ${req.originalUrl}`);
});
app.listen(process.env.PORT || 8080, () => {
  console.log(`server running on`)
});