import React from 'react';
import './App/App.css';
import SearchBox from './SearchBox';
import ReposTable from './ReposTable';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <ReposTable />
    </div>
  );
}

export default App;
