const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
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
  }
];

let nextId = 3;

app.get("/", (req, res) => {
  res.send(JSON.stringify(data));
});

app.post("/", (req, res) => {
  const newPokemon = {
    id: nextId++,
    name: req.body.name,
    type: req.body.type
  };
  data.push(newPokemon);
});

app.listen(8080, () => {
  console.log("server is listening on PORT 8080");
});
