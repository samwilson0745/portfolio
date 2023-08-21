import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import NavBar from "../Navbar/Navbar";
import { Element } from "react-scroll";
import { useState,useEffect } from "react";
const Main = ()=>{
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div>
            <NavBar/>
            <Element name="home"><Home/></Element>
            <Element name="projects"><Projects/></Element>
            <Element name="skills"><Skills/></Element>
            <Element name="about"><About/></Element>
            <Element name="contact"><Contact/></Element>
        </div>
    );
}
export default Main;