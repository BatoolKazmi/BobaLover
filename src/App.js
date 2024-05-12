// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';


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
      <Router>
        <Routes>
          <Route path="/chat" element={<>
            <Header backButton="/" />
            <Chats />
          </>} />
          <Route path="/" element={<>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
