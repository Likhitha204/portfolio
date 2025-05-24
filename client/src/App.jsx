import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <Home />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;