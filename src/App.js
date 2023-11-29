import './App.css';
import React from 'react';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Translate from "./components/Translate.js"
import About from "./components/About.js"
import Image from "./components/Image.js"
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/translate' element={<Translate/>} />
                <Route path='/about' element={<About/>} />
                <Route path="/image" element={<Image/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
