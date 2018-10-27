const ba = require('bitcoinaverage');

var publicKey = 'NzNjNmMyOTAzZmQ5NDQzMzllYjZiZTk3NWU5MWZmOTM';
var secretKey = 'NjA0NmFhOTZkYmUwNGEwMDg2ZDFiYjM1NWExZmFiZmEwMzdlZTFmOWY3YzE0MGFhYTY1YzQ1NjlhYWJkMTViNw';
var ws = ba.websocketClient(publicKey, secretKey);

function Bit_EUR() {
    ws.connectToTickerWebsocket('local', 'BTCEUR', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Bit_RUB() {
    ws.connectToTickerWebsocket('local', 'BTCRUB', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Bit_USD() {
    ws.connectToTickerWebsocket('local', 'BTCUSD', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Bit_GBP() {
    ws.connectToTickerWebsocket('local', 'BTCGBP', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
//Bit_EUR();
//Bit_USD();
//Bit_RUB();
//Bit_GBP();