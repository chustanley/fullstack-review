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

app.use(express.static(__dirname + '/../client/dist')); // html file






app.post('/repos', function (req, res) { // keep an eye out
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  //COMPLETE "Complete post to repos endpoint"
  gitHub.getReposByUsername(req.body.username)
    .then((data) => { //if username is found
      return MongoDbStorage.save(data)
    })
    .then((stan) => {

      if (stan.length) {
        res.send(stan)
      } else {
        throw stan
      }
    }) //THIS WORKS
    .catch((err) => { // if username is now found
      res.send(err);
    })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

   MongoDbStorage.Repo.aggregate([{ $sort: {stargazer: -1} }]).limit(25)
  .then((data) => {
    console.log('-------organized------>', data);
    res.send(data);
   })
   .catch((err) => {
    console.log('Failed to render the repos from database')
    res.send(err);
   })






});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


