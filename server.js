const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, 'build'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
