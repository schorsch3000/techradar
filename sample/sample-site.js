
require('../images/radar_legend.png');
require('../src/stylesheets/base.scss');

const d3 = require('d3');
const createRadar = require('../index');

const radarData = [
  {
    "name": "Hammer",
    "ring": "use",
    "quadrant": "Tools",
    "isNew": true,
    "description": "Good tool to get nails into walls."
  },
  {
    "name": "Nail",
    "ring": "try",
    "quadrant": "Technology",
    "isNew": "TRUE",
    "description": "Good technology to mount something on walls."
  },
  {
    "name": "Glueing",
    "ring": "avoid",
    "quadrant": "Method",
    "isNew": "False",
    "description": "I don't have good experiences with glueing things together."
  },  
  {
    "name": "NPM",
    "ring": "use",
    "quadrant": "Platform",
    "isNew": false,
    "description": "Well-known node package repository."
  },
];

createRadar(radarData);