const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher'); // what is fetcher

console.log('connected');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  username: String,
  individualRepo: String, // full_name
  // This is going to be owner/repoName because many users can create the same repo name. Having this key value to identify the repo will be the best way possible because it also mentions where it came from.
  stargazer: Number, // This is going to be considered for the top 25 repo's
  allRepo: String //The reason why we have this one is because when someone types in a username, it should save all the users repos onto the database. Say our users of our website sees the 25 top repos but sees a very specific one that they like and want to view other repos from that one creator, we can also render that and etc (if thats what the sprint wants us to consider)
});

let Repo = mongoose.model('Repo', repoSchema);
//This creates a repo 'class'
/*

For example:

Var Stanley = new Repo({
  owner: chustanley
  full_name: chustanley/fullStackReview
  stargazer_count: 7
  repos_url: *link found on object*
})
*/

/*
To add methods you just...
repoSchema.methods.sayName = function sayName () {
  const greeting = this.owner ? 'Hi my name is' + this.name : 'I have no username currently'
}
*/

// maybe the save function should loop through the entire array and apply that class above on every individual index.

let save = (usernameRepo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(usernameRepo.data);
}

module.exports.save = save;