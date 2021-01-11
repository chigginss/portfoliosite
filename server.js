const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// check server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.render('index', {});
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });
