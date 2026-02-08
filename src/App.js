import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import OrganKeyboard from "./components/OrganKeyboard";
import Keyboard from './components/keyboard/Keyboard';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organ" element={<OrganKeyboard />} />
            <Route path="/organ" element={<OrganKeyboard />} />
            <Route path="/keyboard" element={<Keyboard />} />

    </Routes>
  </Router>
  );
}

export default App;
