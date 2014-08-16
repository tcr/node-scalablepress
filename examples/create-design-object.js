var fs = require('fs');
var sp = require('../');
var FormData = require('form-data');

var client = sp.createClient(process.env.SP_KEY);

var form = new FormData();
form.append('type', 'dtg');
form.append('sides[front][colors][0]', 'white');
form.append('sides[front][dimensions][width]', '5')
form.append('sides[front][artwork]', fs.createReadStream(__dirname + '/elephant.png'))

form.pipe(client('design').post(form.getHeaders()['content-type'], function (err, json) {
  console.log(err, json);
}))
