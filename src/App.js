import React from 'react';
import Navbar from './components/Navbar';
import SidePanels from './components/SidePanels';
import Home from './components/pages/Home';
import About from './components/pages/About';

const App = () => (
  <div className="App h-100">
    <Navbar />
    <main className="main-content row m-0 h-100">
      <div className="position-fixed h-100 d-none d-md-flex col-md-1 flex-column justify-content-center align-items-center">
        <SidePanels />
      </div>
      <div className="col-md-11 offset-md-1 h-100 contents pt-5">
        <Home />
        <About />
      </div>
    </main>
  </div>
);

export default App;
