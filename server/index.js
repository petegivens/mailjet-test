const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use("/", routes);

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});

const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
server.on("listening", () => console.log(`Listening on port ${port}`));
