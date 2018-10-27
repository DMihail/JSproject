var crypto = require('crypto-js');
var public_key = 'NzNjNmMyOTAzZmQ5NDQzMzllYjZiZTk3NWU5MWZmOTM';
var secret_key = 'NjA0NmFhOTZkYmUwNGEwMDg2ZDFiYjM1NWExZmFiZmEwMzdlZTFmOWY3YzE0MGFhYTY1YzQ1NjlhYWJkMTViNw';
var timestamp = Math.floor(Date.now() / 1000);
var payload = timestamp + '.' + public_key;
var hash = crypto.HmacSHA256(payload, secret_key);
var hex_hash = crypto.enc.Hex.stringify(hash);
var signature = function (){
    return payload + "." + hex_hash;
};

module.exports = signature;

