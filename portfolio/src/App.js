import React from 'react';

import { Footer, Blog, Features, AboutMe, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <AboutMe />
    <Features />
    <Blog />
    <Footer />
  </div>
);

export default App;
