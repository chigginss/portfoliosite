const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
app.use(favicon(__dirname + '/client/public/favicon.ico'));

app.use('/', express.static(path.resolve(__dirname, 'client', 'build')))


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + 'client', 'build', 'index.html'))
});

app.listen(port);
