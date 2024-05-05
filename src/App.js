// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';

// react-router-dom v6 (new version 2024)
// Switch is replaced by routes "Routes"
// <Route path="/" component={Home} /> to <Route path='/' element={<Home/>} />

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Tinder Cards */}
      <Router>
        <Routes>
          <Route path="/chat" element={<h1>I am the chatpage</h1>} />
          <Route path="/" element={<TinderCards />} />
        </Routes>
      </Router>
      {/* Buttons below Tinder cards */}
      {/* Chats screen (top right corner) */}
      {/* Individual chat screen  */}
    </div>
  );
}

export default App;
