import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Galeries from "./components/pages/Galeries";
import Services from "./components/pages/Services";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Galeries />
      <Services />
    </div>
  );
}

export default App;
