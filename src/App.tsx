import React from 'react';

import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import "./App.css"


function App() {
  return (
    <div className='App full-size-background' >
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
