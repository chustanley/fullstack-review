import React from 'react';
import Generator from './Generator.jsx';

const RepoList = ({ repos }) => {

  console.log('--->>', repos)

  return (
    <div>
      <h4> TOP 25 REPOS! </h4>
      <div id='repocounter'>There are {repos.length} repos.</div>
      { repos.map(repo => <Generator individual={repo} key={repo._id}/>)}
    </div>
  )
}

export default RepoList;