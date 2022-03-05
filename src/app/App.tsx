import React from 'react';
import MenuAppBar from '../components/AppBar/AppBar';
import DataTable from '../components/DataTable/DataTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      <div className='Main-Body'>
        <DataTable></DataTable>
      </div>
    </div>
  );
}

export default App;
