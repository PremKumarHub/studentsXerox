import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to Our Business</h1>
        <p>We provide e-Seva services, printing, xerox, and more!</p>
      </header>
      <Services />
    </div>
  );
}

export default App;
