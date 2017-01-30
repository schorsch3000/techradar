require('./stylesheets/base.scss');
require('./images/logo.png');
require('./images/tech-radar-201611-landing-page-wide.png');
require('./images/favicon.ico');
require('./images/radar_legend.png');


const createRadarFromCsv = require('./util/factory');
/**
 * Insert your radar file below or substitute the placeholder radar.csv file with your radar.csv file.
 */
const rawCsv = require("raw-loader!../radars/radar.csv");

createRadarFromCsv(rawCsv);