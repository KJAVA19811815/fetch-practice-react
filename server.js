const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const data = [
  {
    id: 1,
    name: "pikachu",
    type: "electric"
  },
  {
    id: 2,
    name: "charizard",
    type: "fire"
  },
  {
    id: 3,
    name: "mew",
    type: "pyschic"
  },
  {
    id: 4,
    name: "electrabuzz",
    type: "electric"
  }
];

app.get("/", (req, res) => {
  res.send(JSON.stringify(data));
});

app.listen(8080, () => {
  console.log("server is listening on PORT 8080");
});
