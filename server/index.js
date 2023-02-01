const express = require('express');
let app = express();
const MongoDbStorage = require('../database/index.js');
const bodyParser = require('body-parser');
const gitHub = require('../helpers/github');


// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //COMPLETE "Complete post to repos endpoint"








  gitHub.getReposByUsername(req.body.username)
    .then((data) => { //if username is found

      MongoDbStorage.save(data);
    })
    .catch((err) => { // if username is now found
      console.log('USER NOT FOUND')
    })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


