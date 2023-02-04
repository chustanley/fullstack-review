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
  }, []); // leaving an array here will invoke the function ONCE per render


  const search = (term) => {
    // term = whatever you type into userbar
    // $.post('http://localhost:1128/repos', term);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',// can remove localhost
      data: {
        username: term
      },
      success: (data) => {
        console.log('Sucessfully Added!')
        refresh();
      }, // force refresh.
      error: (err) => {
        alert('Username not found! Please try again')
      } // comment
    })

    console.log(`${term} was searched`);

  }

// refresh();


  return (
    <div>
      <div>
        <h1 id='githubfetcher' className='title'>Github</h1>
        <img id='image' className='title' src='github gif.gif'></img>
        <h1 id='githubfetcher' className='title'>Fetcher</h1>
      </div>
      <Search onSearch={search}/>
      <RepoList repos={repos}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));