import React from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Books from './components/Book';
import Contact from './components/Contact';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Resume />
    <Projects />
    <Skills />
    <Book />
    <Contact />
  </div>
);

export default App;
