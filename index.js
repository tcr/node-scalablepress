var rem = require('rem');

function createClient (key) {
  return rem.createClient({
    base: 'http://127.0.0.1:8000/',
  }, {
    uploadFormat: 'form'
  }).use(function (req, next) {
    req.headers['Authorization'] = 'Basic ' + new Buffer(':' + key).toString('base64');
    next();
  })
};

exports.createClient = createClient;
