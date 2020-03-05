import React from 'react';
import './App/App.css';
import SearchBox from './SearchBox';
import UserCard from './UserCard';
import ReposTable from './ReposTable';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <UserCard />
      <ReposTable />
    </div>
  );
}

export default App;
