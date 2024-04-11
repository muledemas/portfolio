import { useState } from "react";
import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import MobileToggle from "./components/toggler/MobileToggle";
import Profile from "./components/profile/Profile";

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
      <Profile/>
    </div>
  );
}

export default App;
