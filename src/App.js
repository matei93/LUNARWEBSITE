import React from "react";
import Home from "./components/pages/Home";
import NavBar from "./components/inc/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Galeries from "./components/pages/Galeries";
import Nunta from "./components/pages/Nunta";
import LoveStories from "./components/pages/LoveStories";
import Botez from "./components/pages/Botez";
import Footer from "./components/inc/Footer";
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
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/galeries" element={<Galeries />}></Route>
          <Route path="/nunta" element={<Nunta />}></Route>
          <Route path="/lovestories" element={<LoveStories />}></Route>
          <Route path="/botez" element={<Botez />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
