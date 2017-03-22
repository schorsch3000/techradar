
require('../images/radar_legend.png');
require('../src/stylesheets/base.scss');

// in your project, use the following line to include stylesheet information
// require('../node_modules/techradar/src/stylesheets/base.scss');
// make sure to proceess it to css as part of your build procedure, e.g. with webpack

const createRadar = require('../index'); 
//replace with require('techradar') when using the npm package 'techradar' in your project

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