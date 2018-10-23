const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const https = require('https');


const options = {
  key: fs.readFileSync('./cert/2BABF81C34AB39706EA004FE027FF72F.key'),
  cert: fs.readFileSync('./cert/2BABF81C34AB39706EA004FE027FF72F.crt')
}

app.use(express.static('./dist/TEST2'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/TEST2/index.html'));
});

app.listen(process.env.PORT || 80, () => {
  console.log('Server started');
});
https.createServer(options,app).listen(80);
