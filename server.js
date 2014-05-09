  var vertx = require('vertx');

  vertx.createHttpServer().requestHandler(function(req) {
      var file = req.path() === '/' ? 'web/index.html' : req.path();
      req.response.sendFile('web/' + file);
  }).listen(8080)