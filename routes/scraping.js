var request = require('request');
var cheerio = require('cheerio');
var express = require('express');
var router = express.Router();
var URL = require('url-parse');

router.post('/', function(req, res, next){
  var airline = req.body.airline
  var flightNumber = req.body.flightNumber
  
  var pageToVisit = "https://www.flightstats.com/v2/flight-tracker/" + airline + '/' + flightNumber
  var data = {}
  console.log("Visitando pagina " + pageToVisit);
  request(pageToVisit, function (error, response, body) {
      if (error) {
          console.log("Error: " + error);
      }
      // Revisar codigo HTTP
      console.log("Status code: " + response.statusCode);
      if (response.statusCode === 200) {
          // Cuerpo del documento
          var $ = cheerio.load(body);
          $("div.text-helper__TextHelper-s8bko4a-0.CPamx").map(function (i, elem) {
              if (i == 0) {
                  data['departure'] = elem.firstChild.data
              }
              else {
                  data['arrival'] = elem.firstChild.data
              }
          })
          $("div.text-helper__TextHelper-s8bko4a-0.cCfBRT").map(function (i, elem) {
              if (i == 0) {
                  data['scheduled'] = elem.firstChild.data
              }
              else if (i == 1) {
                  data['actual'] = elem.firstChild.data
              }
          })
          data['status'] = $("div.text-helper__TextHelper-s8bko4a-0.kWxgTv").text()
          res.send(data);
      }
    });
  })
  module.exports = router;