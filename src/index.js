require("dotenv").config();
const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
<<<<<<< HEAD
const port = 8080;
=======
>>>>>>> refs/remotes/origin/main
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const todoFilePath = process.env.BASE_JSON_PATH;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json());

app.use("/content", express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  res.sendFile("./public/index.html", { root: __dirname }, (err) => {
    console.log(err);
});
});

app.get("/todos", (_, res) => {
<<<<<<< HEAD
  // res.header("Content-Type", "application/json");
  // res.sendFile(todoFilePath, { root: __dirname }
  

=======
  /*
  res.header("Content-Type","application/json");
  res.sendFile(todoFilePath, { root: __dirname });
  */
>>>>>>> refs/remotes/origin/main
  res.status(501).end();
});

//Add GET request with path '/todos/overdue'

app.get('/todos/overdue', (req, res) => {
  res.status(errorStatus).send('Not implemented');
});

//Add GET request with path '/todos/completed'

app.get('/todos/completed', (req, res) => {
  res.status(errorStatus).send('Not implemented');
});

//Add POST request with path '/todos'

//Add PATCH request with path '/todos/:id

//Add POST request with path '/todos/:id/complete

app.post('/todos/:id/complete', (req, res) => {
  res.status(errorStatus).send('Not implemented');
});


//Add POST request with path '/todos/:id/undo

//Add DELETE request with path '/todos/:id

<<<<<<< HEAD
app.delete('/todos/:id', (req, res) => {
  res.status(errorStatus).send('Not implemented');
});

app.listen(port, function () {
  console.log(`Node server is running... http://localhost:${port}`);
});

=======
>>>>>>> refs/remotes/origin/main
module.exports = app;
