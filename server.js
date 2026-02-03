const https = require('https');
const fs = require('fs');
const path = require('path');

const colours = {
  reset: "\x1b[0m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
}

// Secure certificate check
function safeRead(file) {
  try {
    return fs.readFileSync(path.join(__dirname, file));
  } catch (err) {
    console.error(colours.red,'ERR_CERT_MISSING', colours.reset); // short code for logs
    console.error(colours.yellow, 'Required TLS files not found.', colours.reset);
    process.exit(1); // abort startup
  }
}

const options = {
  key: safeRead('server.key'),
  cert: safeRead('server.cert'),
};


const PORT = 8443;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
};

https.createServer(options, (req, res) => {
  if (req.url === '/data') {
  fs.readFile(path.join(__dirname, 'data', 'numberplates.json'), 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to read JSON file' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
  return;
}

  const PUBLIC_DIR = path.join(__dirname, 'public');

  let filePath = req.url;

  if (filePath === '/' || filePath === '') {
    filePath = '/index.html';
  }

  filePath = path.join(PUBLIC_DIR, filePath);


  fs.exists(filePath, (exists) => {
    if (!exists) {
      console.error(colours.red, `ERROR: 404 NOT FOUND - ${filePath}`, colours.reset);

      const PUBLIC_DIR = path.join(__dirname, 'public');
      const notFoundPage = path.join(PUBLIC_DIR, '404.html');

      fs.readFile(notFoundPage, (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('NOT_FOUND');
          return;
        }

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(content);
      });

      return;
    }


    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
}).listen(PORT, () => {
  console.log(colours.green, `HTTPS server started at https://localhost:${PORT}/`, colours.reset);
});
