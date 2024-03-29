const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');
const privateKey = fs.readFileSync('./cert/7BB6209AA18E079FD5A9EECCB85D6A85.key');
const certyficate = fs.readFileSync('./cert/7BB6209AA18E079FD5A9EECCB85D6A85.crt');
const credentials = {
  key: privateKey,
  cert: certyficate
}
app.use(function(req, res, next) {
  if (req.secure) {
      next();
  } else {
      res.redirect('https://' + req.headers.host + req.url);
  }
});

app.use(express.static('./dist/TEST2'));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/TEST2/index.html'));
});

httpServer.listen(80, () => {
  console.log('Server Https started on 80')
});

httpsServer.listen(443, () => {
  console.log('Server Https started on 443')
});
