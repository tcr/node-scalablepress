var fs = require('fs');
var sp = require('../');

if (!process.env.SP_KEY) {
  throw new Error('Set your SP_KEY environment variable before running test.');
}

var client = sp.createClient(process.env.SP_KEY);

client('quote').post({
  'type': 'dtg',
  'sides': { front: 1 },
  'products': [
    { 
      id: 'gildan-sweatshirt-crew',
      color: 'ash',
      quantity: 12,
      size: 'lrg'
    }
  ],
  'address': {
    'name': 'Jo Schmo',
    'address1': '123 Scalable Drive',
    'city': 'West Pressfield',
    'state': 'CA',
    'zip': '12345',
  },
  'designId': '53ed3a23b3730f0e27a66513',
}, function (err, json) {
  console.log(json);
  // read json.orderToken on success
});
