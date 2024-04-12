import { useState } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import MobileToggle from "./components/toggler/MobileToggle";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Experiance from "./components/experience/Experiance";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
//import { Route, BrowserRouter } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // const menu = document.querySelector(".menuLinks");
    // const icon = document.querySelector(".hamburgerIcon");

    // menu.classList.toggle('open');
    // icon.classList.toggle('open');
  };
  return (
    <div>
      <Navbar />
      <MobileToggle isOpen={isOpen} toggleOpen={toggleMenu} />
      <Profile />
      <About />
      <Experiance />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
