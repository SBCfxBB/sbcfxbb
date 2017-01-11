var getQuoteParams = require('getQuoteParams.js');
$(function() {
  function getQuote () {
  request({
    uri: "https://api-fxtrade.oanda.com/v1/prices?instruments=" + quoteParams.symbol,
    method: "GET",
    timeout: 2000,
    followRedirect: true,
    maxRedirects: 3,
  },function(error, response, body){
    console.log(body);
  });
};
var quoteInterval = quoteParams.quoteInterval;
setInterval(getQuote, quoteInterval);
});
