import React, { useEffect } from "react";
import Card from "./Card";
import Skills from "./Skills";
 
import AOS from "aos";
import "aos/dist/aos.css";
 
function App() {
  useEffect(() => {
    AOS.init();
  });
 
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <Skills />
      </div>
    </div>
  );
}
 
export default App;