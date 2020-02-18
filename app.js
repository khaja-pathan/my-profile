const http = require('http');
const express = require('express');
const port = 3000;
const mongoose = require('mongoose');

// const app = http.createServer(express());
const server = http.createServer();
const app = express(server);

//db connection
mongoose.connect('mongodb://localhost:27017/myprofile', { useNewUrlParser: true },(err)=> {
  if (err) console.log("db connection error", err);
  console.log('db connected successfully');
})

require('./config/express.config')(app);
require('./routes')(app);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
