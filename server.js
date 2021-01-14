const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

// set default engine
app.set('view engine', 'jade');

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'client', 'public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
