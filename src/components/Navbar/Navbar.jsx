import { Link } from 'react-scroll';
import './navbar.css';
import { useState,useEffect } from 'react';
const NavBar = ()=>{
    const [visible, setVisible] = useState(true);
  let timeoutId;

  const hideNavbar = () => {
    setVisible(false);
  };

  const handleScroll = () => {
    clearTimeout(timeoutId);
    setVisible(true);
    timeoutId = setTimeout(hideNavbar, 1000); // Adjust the delay time as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
    return (
        <nav className={`navbar ${visible ? 'visible':'hidden'}`}>
            <div className='links' style={{ align:"right"}}>
                    <Link activeClass="my-active" className='animated-underline' smooth={true} spy={true} to="home">HOME</Link>
                    <Link activeClass="my-active" className='animated-underline' smooth={true} spy={true} to="projects">PROJECTS</Link>
                    <Link activeClass="my-active" className='animated-underline' smooth={true} spy={true} to="skills">SKILLS</Link>
                    <Link activeClass="my-active" className='animated-underline' smooth={true} spy={true} to="about">ABOUT</Link>
                    <Link activeClass="my-active" className='animated-underline' smooth={true} spy={true} to="contact">CONTACT</Link>
            </div>
        </nav>
    )
}
export default NavBar;