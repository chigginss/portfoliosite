const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
app.use(favicon(__dirname + '/client/public/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use('/', express.static(path.join(__dirname, "build")))

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + '/app/client/build/index.html'))
});

app.listen(port);
