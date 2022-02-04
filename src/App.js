import React from 'react';
import { Navbar } from './components';
import './App.css'
import { Header,Carousel } from './container';

const App = () => (
  <div className="App">
      <Navbar />
      <Header />
      <Carousel />
  </div>
)

export default App;
