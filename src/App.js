import React, { useState } from "react";
import NavBar from "./components/inc/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Galeries from "./components/pages/Galeries";
import Nunta from "./components/pages/Nunta";
import LoveStories from "./components/pages/LoveStories";
import Botez from "./components/pages/Botez";
import Services from "./components/pages/Services";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/galeries" element={<Galeries />}></Route>
          <Route path="/nunta" element={<Nunta />}></Route>
          <Route path="/lovestories" element={<LoveStories />}></Route>
          <Route path="/botez" element={<Botez />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
