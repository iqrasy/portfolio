const express = require("express");
const morgan = require("morgan");

const app = express();
const server = require("http").createServer(app);

const PORT = 4000;

app
  .use(express.json())
  .use(morgan("dev"))

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "oops.",
    });
  });

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
