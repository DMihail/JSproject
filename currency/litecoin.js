const ba = require('bitcoinaverage');

var publicKey = 'NzNjNmMyOTAzZmQ5NDQzMzllYjZiZTk3NWU5MWZmOTM';
var secretKey = 'NjA0NmFhOTZkYmUwNGEwMDg2ZDFiYjM1NWExZmFiZmEwMzdlZTFmOWY3YzE0MGFhYTY1YzQ1NjlhYWJkMTViNw';
var ws = ba.websocketClient(publicKey, secretKey);

function Ltc_EUR() {
    ws.connectToTickerWebsocket('local', 'LTCEUR', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Ltc_RUB() {
    ws.connectToTickerWebsocket('local', 'LTCRUB', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Ltc_USD() {
    ws.connectToTickerWebsocket('local', 'LTCUSD', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Ltc_GBP() {
    ws.connectToTickerWebsocket('local', 'LTCGBP', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
//Ltc_EUR();
//Ltc_USD();
//Ltc_RUB();
//Ltc_GBP();