import React from 'react';


const Generator = ({ individual }) => {


  console.log(individual);

  var username = individual.username;
  var repository = individual.repoName;
  var popularity = individual.stargazer;
  var moreRepoFromUser = individual.repoLink;

  return (
    <div className='repo'>
      <img id='repoimage' src='repoimage.gif'></img>
      <div className='repodescription'>
        <div> Username: {username} </div>
        <div> Repository: <a href={moreRepoFromUser}>{repository}</a> </div>
        <div> Popularity Rating: {popularity} </div>
      </div>
    </div>

  )
}

export default Generator;