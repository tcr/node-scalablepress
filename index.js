var rem = require('rem');

function createClient (key) {
  return rem.createClient({
    base: 'https://api.scalablepress.com/v2/',
  }, {
    uploadFormat: 'form'
  }).use(function (req, next) {
    req.headers['Authorization'] = 'Basic ' + new Buffer(':' + key).toString('base64');
    next();
  })
};

exports.createClient = createClient;
