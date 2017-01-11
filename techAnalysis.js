var math = require('mathjs');
var cdata = canldesData;

function calcSMA () {
  var closeSum = 0;
  var i;
  for (x in json.cdata.candles['closeMid']) {
    closeSum += json.cdata.candles['closeMid'][x];
    i++;
  }
  var sma = (closeSum/i);
  return sma;
}

function calcBB4
