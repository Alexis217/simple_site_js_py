const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../shared/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../shared/public/index.html"));
});

app.listen(port, () => {
  console.log(`Express: http://localhost:${port}`);
});
