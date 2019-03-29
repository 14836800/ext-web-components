const path = require('path');
const fs = require('fs')

function boldGreen (s) {
  var boldgreencolor = `\x1b[32m\x1b[1m`
  var endMarker = `\x1b[0m`
  return (`${boldgreencolor}${s}${endMarker}`)
}

var nodeDir = path.resolve(__dirname)
var pkg = (fs.existsSync(nodeDir + '/package.json') && JSON.parse(fs.readFileSync(nodeDir + '/package.json', 'utf-8')) || {});
version = pkg.version

console.log (`Welcome to ${boldGreen('Sencha ext-components-gen')} v${version} - The ExtComponents code generator

${boldGreen('Quick Start:')}
ext-components-gen app CoolExtComponentsApp
ext-components-gen app -i

${boldGreen('Examples:')}
ext-components-gen app --name CoolExtComponentsApp

Run ${boldGreen('ext-components-gen --help')} to see all options
`)
