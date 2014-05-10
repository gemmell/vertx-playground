  var vertx = require('vertx');
  var container = require('vertx/container');

  vertx.createHttpServer().requestHandler(function(req) {
      var file = req.path() === '/' ? 'web/index.html' : req.path();
      req.response.sendFile('web/' + file);
  }).listen(parseInt(container.env.get('PORT')));