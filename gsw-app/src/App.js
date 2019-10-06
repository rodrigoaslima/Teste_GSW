import React from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import SideMenu from './ui/SideMenu';
import Home from './container/Home';
//import './css/pure-min.css';
//import './css/side-menu.css';

function App() {
  return (

    <div className="container">
      <NavBar />
      <SideMenu />     
    </div>
  );
}

export default App;
