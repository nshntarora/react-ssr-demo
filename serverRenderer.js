const express = require("express");
const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

import App from "./src/App";

const app = express();

function handleRender(req, res) {
  // Renders our Hello component into an HTML string
  const html = ReactDOMServer.renderToString(<App />);
  const filePath = path.resolve(__dirname, "build", "index.html");
  
  // console.log(filePath, __dirname);
  // Load contents of index.html
  fs.readFile(filePath, "utf8", function(err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${html}</div>`
    );
    // Sends the response back to the client
    res.send(document);
  });
}

// Serve built files with static files middleware
app.use('/static', express.static(path.join(__dirname, 'build', 'static')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Serve requests with our handleRender function
app.get("*", handleRender);

app.listen(process.env.PORT || 5000, () => {
  console.log("The server is running on port 5000");
});
