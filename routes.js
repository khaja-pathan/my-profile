module.exports = function(app) {
  
  app.use('/profile', require('./api/profile'));
  app.get('/', (req, res) => {
    res.send('Application is up and running');
  })
};
