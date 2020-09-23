import React from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';

const App = () => (
  <>
    <Header />
    <div className="container-fluid" id="main">
      {/* <div className="container">
        <p>Hello World !!!</p>
      </div> */}
      <Introduction />
    </div>
  </>
);

export default App;
