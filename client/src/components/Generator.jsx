import React from 'react';


const Generator = ({ individual }) => {


  console.log(individual);

  var username = individual.username;
  var repository = individual.individualRepo;
  var popularity = individual.stargazer;
  var moreRepoFromUser = individual.allRepo;

  return (
    <div className='repo'>
      <div > Username: {username} </div>
      <div> Resository: {repository} </div>
      <div> Popularity Rating: {popularity} </div>
      <div> More Repositories From User: {moreRepoFromUser} </div>
    </div>
  )
}

export default Generator;