const express = require('express');
const path = require('path');
const app = express();
const PORT =  process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/my-app'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/my-app/index.html');
});

app.listen(PORT, function () {
  console.log('Server running in port: ' + PORT );
});