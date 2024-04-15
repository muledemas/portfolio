import React, {useRef , useState } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import MobileToggle from "./components/toggler/MobileToggle";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Experiance from "./components/experience/Experiance";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
//import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
//import Switch from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false);
   const sectionRef = useRef(null);

   const handleClick = () => {
     if (sectionRef.current) {
       sectionRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // const menu = document.querySelector(".menuLinks");
    // const icon = document.querySelector(".hamburgerIcon");

    // menu.classList.toggle('open');
    // icon.classList.toggle('open');
  };
  return (
    <>
      <Navbar />
      <MobileToggle isOpen={isOpen} toggleOpen={toggleMenu} />
      <Profile />
      <About scrollToSection={handleClick} />
      <Experiance scrollToSection={handleClick} refs={sectionRef} />
      <Projects scrollToSection={handleClick} refs={sectionRef} />
      <Contact refs={sectionRef} />
      <Footer />
    </>
  );
}

export default App;
