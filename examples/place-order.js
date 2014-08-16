var fs = require('fs');
var sp = require('../');

if (!process.env.SP_KEY) {
  throw new Error('Set your SP_KEY environment variable before running test.');
}

var client = sp.createClient(process.env.SP_KEY);

client('order').post({
  'orderToken': 'c6ae6ca449719e5237d103139255ecdd',
}, function (err, json) {
  console.log(json);
  // read json.orderId on success
});
