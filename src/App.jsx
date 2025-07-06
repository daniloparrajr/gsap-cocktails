import React from 'react';
import { ScrollTrigger, SplitText  } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <Navbar/>
    </main>
  );
};
export default App;