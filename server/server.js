const express = require("express");
const app = express();

app.use(express.static(__dirname + "/build"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

const port = 5000;
app.listen(port, () => console.log(`${port}`));
