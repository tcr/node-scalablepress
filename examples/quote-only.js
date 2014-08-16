var fs = require('fs');
var sp = require('../');

if (!process.env.SP_KEY) {
  throw new Error('Set your SP_KEY environment variable before running test.');
}

var client = sp.createClient(process.env.SP_KEY);

client('quote').post({
  'type': 'dtg',
  'sides': { front: '1' },
  'products': [
    { 
      id: 'gildan-sweatshirt-crew',
      color: 'ash',
      quantity: 12,
      size: 'lrg'
    }
  ]
}, function (err, json) {
  console.log(json);
});