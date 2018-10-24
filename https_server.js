const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');
const privateKey = fs.readFileSync('./cert/2BABF81C34AB39706EA004FE027FF72F.key');
const certyficate = fs.readFileSync('./cert/2BABF81C34AB39706EA004FE027FF72F.crt');
const credentials = {
  key: privateKey,
  cert: certyficate
}

app.use(express.static('./dist/TEST2'));
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/TEST2/index.html'));
  res.redirect('https://' + req.headers.host + req.url);
});

httpServer.listen(80, () => {
  console.log('Server Http started on 80')
});

httpsServer.listen(443, () => {
  console.log('Server Https started on 443')
});