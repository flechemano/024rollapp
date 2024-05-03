import React from 'react';
import HomePage from './NewPage'; // Importing HomePage.js from the same directory
import logo from './logo.svg'; // Importing logo image

function App() {
  return (
    <div>
      <img src={logo} alt="logo" /> {/* Render logo image */}
      <h1>024rollapp</h1>
      <HomePage /> {/* Render the HomePage component */}
    </div>
  );
}

export default App;
