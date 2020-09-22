import React from 'react';
import './App.css';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <div className="container-fluid" id="main">
      <div className="container">
        <p>Hello World !!!</p>
      </div>
    </div>
  </>
);

export default App;
