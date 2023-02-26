require("dotenv").config();
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const todoFilePath = process.env.BASE_JSON_PATH;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json());

app.use("/content", express.static(path.join(__dirname, "public")));

//Add GET request with path '/'

app.get("/", (_, res) => {
  res.sendFile("./public/index.html", { root: __dirname }, (err) => {
    console.log(err);
  });

  res.status(200);
});

//Add GET request with path '/todos'

app.get("/todos", (_, res) => {
  res.header("Content-Type", "application/json");
  res.sendFile(todoFilePath, { root: __dirname });

  res.status(200);
});

//Add GET request with path '/todos/overdue'

app.get("/todos/overdue", (req, res) => {
  const date = new Date();
  const profile = JSON.parse(
    fs.readFileSync(path.join(__dirname, "models/todos.json"))
  );
  const result = profile.filter((item) => new Date(item.due) < date);
  res.send(result);
  profile[0].due;
});

//Add GET request with path '/todos/completed'

app.get("/todos/completed", (req, res) => {
  const todos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "models/todos.json"))
  );
  const result = todos.filter((item) => item.completed == true);
  res.send(result);
  res.status(200);
});

//Add POST request with path '/todos'

app.post("/todos", (req, res) => {});

// Add Get request for individual todo items path

app.get("/todos/:id", (req, res) => {
  const todos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "models/todos.json"))
  );
  let item;
  let itemFound = false;
  for (let i = 0; i < todos.length; i++) {
    item = todos[i];
    if (item.id == req.params.id) {
      itemFound = true;
      break;
    }
  }

  if (!itemFound) {
    res.status(404);
    res.send("Item not found");
  } else {
    res.send(item);
  }
});

//Add PATCH request with path '/todos/:id

app.patch("/todos/:id", (req, res) => {
  const todos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "models/todos.json"))
  );
  let item;
  let itemFound = false;
  for (let i = 0; i < todos.length; i++) {
    item = todos[i];
    if (item.id == req.params.id) {
      itemFound = true;
      if (req.body.name) {
        item.name = req.body.name;
        fs.writeFileSync(path.join(__dirname, "models/todos.json"), JSON.stringify(todos, null, 2))
      }

      break;
    }
  }

  if (!itemFound) {
    res.status(404);
    res.send("Item not found");
  } else {
    res.send(item);
  }
});


//(new Date()).toISOString()


//Add POST request with path '/todos/:id/complete

app.post("/todos/:id", (req, res) => {});
//Add POST request with path '/todos/:id/undo

app.post("/todos/:id/undo", (req, res) => {
  res.send(message);
});
//Add DELETE request with path '/todos/:id

app.delete("/todos/01507581-9d12-4c3a-bb60-19d539a11189", (req, res) => {
  const todos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "models/todos.json"))
  );
  const removeID = document.getElementById(todos.id).remove();
});

app.listen(port, function () {
  console.log(`Node server is running... http://localhost:${port}`);
});

module.exports = app;
