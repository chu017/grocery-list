// #1 CREATE THE SERVER
const express = require('express')
const app = express()
const path = require('path');
// import db from database - index.js
const db = require('../database')
const port = 3000
// console.log(app);
// console.log(db);

var controller = require('./controllers');
app.use(express.urlencoded({extended: true}));

// #2 CREATE SERVER HANDELER: create a ROUTE HANDELER to respond client side request
// app.get('/', (req, res) => {res.send('Hello World!');});

// app.post('/', (req, res) => {res.send('received POST');});

// ROUTE HANDLERS
app.use('/', express.static(path.join(__dirname, '../client/dist/')));

// get request
app.get('/groceries', controller.get);

// post request
app.post('/groceries', controller.post);

// edit request
app.patch('/groceries/:id', controller.edit);

// delete request
app.delete('/groceries/:id', controller.delete);


// #3 LISTENING LOGIC: listen to the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// primary domain
// ip address: localhost
// port: 3000 / 8080 / 5500 / 80 public port
// endpoint: student

// Killing a port: kill $(lsof -ti:3000)
// curl http://localhost:3000/
// curl http://localhost:3000/groceries/
// curl -X POST http://localhost:3000/groceries/