import util from 'util';
import restclient from 'restler';
import moment from 'moment';



var fxml_url = 'http://flightxml.flightaware.com/json/FlightXML2/';
var username = 'slippa91';
var apiKey = '84c5409c7ea2dd5a0e3b0ba9b0fb770dee70c920';


restclient.get(fxml_url + 'MetarEx', {
    username: username,
    password: apiKey,
    query: {airport: 'KPHX', howMany: 1}
}).on('success', function(result, response) {
    // util.puts(util.inspect(result, true, null));
    var entry = result.MetarExResult.metar[0];
    // util.puts('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
    console.log('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');
    console.log('The temperature at ' + entry.airport + ' is ' + (entry.temp_air * 1.8 + 32) + 'F');
});

restclient.get(fxml_url + 'FlightInfo', {
    username: username,
    password: apiKey,
    query: {ident: 'SWA1923', howMany: 1}
}).on('success', function(result, response) {
    // util.puts(util.inspect(result, true, null));
    // console.log("result", result);
    // var entry = result.FlightInfoResult.flights[0];
    var departtime = result.FlightInfoResult.flights[0].filed_departuretime;
    var convdep = moment(departtime * 1000).format('MMMM Do YYYY,h:mm:ss a');
    var arrivetime = result.FlightInfoResult.flights[0].estimatedarrivaltime;
    var convarr = moment(arrivetime * 1000).format('MMMM Do YYYY,h:mm:ss a')
    // console.log("entry", entry);
    console.log("departure time", departtime, convdep);
    console.log("arriv time", arrivetime, convarr);
    // console.log("moment", converted.format(dddd, MMMM Do, YYYY));

    // util.puts('The temperature at ' + entry.airport + ' is ' + entry.temp_air + 'C');

})

