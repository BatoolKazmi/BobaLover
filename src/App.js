// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <h1>BOBATINDER!</h1> */}

        {/* Header */}
        <Header />

        {/* Tinder Cards */}
        {/* Buttons below Tinder cards */}

        {/* Chats screen (top right corner) */}
        {/* Individual chat screen  */}
      </Router>
    </div>
  );
}

export default App;
