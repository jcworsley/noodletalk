module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render('index', {
      title: 'Noodle Talk',
      channel: ''
    });
  });

  app.get("/c/:channel", function(req, res) {
    res.render('index', {
      title: 'Noodle Talk: ' + req.params.channel,
      channel: req.params.channel
    });
  });
};
