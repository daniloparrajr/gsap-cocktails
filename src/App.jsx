import React from 'react';
import { ScrollTrigger, SplitText  } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  );
};
export default App;