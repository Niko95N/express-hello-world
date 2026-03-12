const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Pilvi sivu kuuntelee porttia: ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Terveisiä harjoittelun parista!</title>
  </head>
  <body style="background-color: gray;">
    <section>
    color: #gray;
      <h1>Terveisiä harjoittelun parista!</h1>
      <p>Ensimmäinen render.com pilvi sivu on luotu onnistuneesti.</p>
    </section>
  </body>
</html>
`
