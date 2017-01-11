//include http
var http = require("http");
//include request
var request = require("request");
//include oanda dev script
var OANDAjs = require("http://developer.oanda.com/oandajs/oanda.js");
//login
var oAuth = require('oAuth.js');
//get current price
var quoteAPI = require('getQuote.js');
//get candle data for analysis
var candleGet = require('candleGet.js');
//create datapoints not included in candle (eg bollinger bands, SMA, pivot points)
var techAnalysis= require('techAnysis.js');
