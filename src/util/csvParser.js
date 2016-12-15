/* flow */

const d3 = require("d3-dsv");
const csv = require("raw-loader!../../radars/Example Radar.csv");

module.exports = () => d3.csvParse(csv);