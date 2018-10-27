const ba = require('bitcoinaverage');

var publicKey = 'NzNjNmMyOTAzZmQ5NDQzMzllYjZiZTk3NWU5MWZmOTM';
var secretKey = 'NjA0NmFhOTZkYmUwNGEwMDg2ZDFiYjM1NWExZmFiZmEwMzdlZTFmOWY3YzE0MGFhYTY1YzQ1NjlhYWJkMTViNw';
var ws = ba.websocketClient(publicKey, secretKey);

function Eth_EUR() {
    ws.connectToTickerWebsocket('local', 'ETHEUR', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Eth_RUB() {
    ws.connectToTickerWebsocket('local', 'ETHRUB', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Eth_USD() {
    ws.connectToTickerWebsocket('local', 'ETHUSD', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
function Eth_GBP() {
    ws.connectToTickerWebsocket('local', 'ETHGBP', function (response) {
        console.log(JSON.stringify(response, null, 4));
    });
}
//Eth_EUR();
//Eth_USD();
//Eth_RUB();
//Eth_GBP();
