const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')

const app = express()

app.use('/', (req, res, next) => {
  res.status(200).json({message: 'api home page'})
})

const options = {
  key: fs.readFileSync('localhost-private.pem'),
  cert: fs.readFileSync('localhost-cert.pem'),
}

const sslServer = https.createServer(options, app)

const port = 8443
sslServer.listen(port, () => {
  console.log(`Starting server https://localhost:${port}`)
})

// // curl -k https://localhost:8000/
// const https = require('https');
// const fs = require('fs');

// https.createServer(options, (req, res) => {
// res.writeHead(200);
// res.end('hello world\n');
// }).listen(8000);

// Or

// const https = require('https');
// const fs = require('fs');

// const options = {
// pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
// passphrase: 'sample'
// };

// https.createServer(options, (req, res) => {
// res.writeHead(200);
// res.end('hello world\n');
// }).listen(8000);
