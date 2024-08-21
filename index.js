const express = require("express");
const { runPuppeteerScript } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/s", (req, res) => {
  const address = req.query.address;  // Extract the address from query parameters
  runPuppeteerScript(address, res);  // Pass the address to scrapeLogic
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
