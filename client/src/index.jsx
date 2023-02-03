import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Generator from './components/Generator.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);




  const refresh = () => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1128/repos',

      success: (data) => {
        console.log('THIS IS DATA', data)


          setRepos(data);

      }, // force refresh.
      error: (err) => {
        console.log('Error in trying to retrieve data')
      } // comment
    })
  }

  useEffect(() => {
    refresh();
  }, repos)



  const search = (term) => {
    // term = whatever you type into userbar
    // $.post('http://localhost:1128/repos', term);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: {
        username: term
      },
      success: (data) => {
        console.log('Sucessfully Added!')
        refresh();
      }, // force refresh.
      error: (err) => {
        console.log('Error or Duplicate found')
      } // comment
    })

    console.log(`${term} was searched`);

  }

// refresh();


  return (
    <div>
      <h1>Github Fetcher</h1>
      <Search onSearch={search}/>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));