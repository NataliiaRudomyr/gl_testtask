import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Table from './components/Table';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
