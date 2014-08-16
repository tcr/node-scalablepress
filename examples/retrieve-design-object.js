var fs = require('fs');
var sp = require('../');
var FormData = require('form-data');

var client = sp.createClient(process.env.SP_KEY);

client('design', process.argv[2]).post({}, function (err, json) {
	console.log(err, json);
})
