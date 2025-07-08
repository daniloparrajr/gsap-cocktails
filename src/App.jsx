import React from 'react';
import { ScrollTrigger, SplitText  } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About />
      <Art />
    </main>
  );
};
export default App;