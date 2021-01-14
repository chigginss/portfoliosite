const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//set default engine, and provide [handlebars as] extension
app.set('view engine', 'jade');

app.listen(port, () => console.log(`Listening on port ${port}`));