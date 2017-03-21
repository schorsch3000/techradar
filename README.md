An npm package to generate an interactive radar that you can include easily into your webpage.
Inspired by the radar of the consulting company Thoughtworks and initially based on their respective open source project.

## How To Use

Type `npm run demo` to see a demo built with webpack.
See the samples folder and the webpack.config.js on how to visualize your data on a radar and how it works in detail.

````
require('../images/radar_legend.png');
require('../src/stylesheets/base.scss');

const d3 = require('d3');
const createRadar = require('../index');

const radarData = [
  {
    "name": "Hammer",
    "ring": "use",
    "quadrant": "Tools",
    "isNew": "true",
    "description": "Good tool to get nails into walls."
  },
  {
    "name": "Nail",
    "ring": "try",
    "quadrant": "Technology",
    "isNew": "true",
    "description": "Good technology to mount something on walls."
  },
  {
    "name": "Glueing",
    "ring": "avoid",
    "quadrant": "Method",
    "isNew": "true",
    "description": "I don't have good experiences with glueing things together."
  },  
  {
    "name": "NPM",
    "ring": "use",
    "quadrant": "Platform",
    "isNew": "true",
    "description": "Well-known node package repository."
  },
];

createRadar(radarData);
````


## Contribute
Github: https://github.com/thomasfranz/techradar
Pull requests are very welcome; please write tests whenever possible.