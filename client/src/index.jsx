import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {

    // term = whatever you type into userbar


    // $.post('http://localhost:1128/repos', term);


    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: {
        username: term
      },
      success: null,
      error: null
    })

    console.log(`${term} was searched`);
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));