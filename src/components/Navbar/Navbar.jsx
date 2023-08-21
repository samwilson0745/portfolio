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
                    <Link activeClass="my-active"  smooth={true} spy={true} to="home">Home</Link>
                    <Link activeClass="my-active"  smooth={true} spy={true} to="projects">Projects</Link>
                    <Link activeClass="my-active"  smooth={true} spy={true} to="skills">Skills</Link>
                    <Link activeClass="my-active"  smooth={true} spy={true} to="about">About</Link>
                    <Link activeClass="my-active"  smooth={true} spy={true} to="contact">Contact</Link>
            </div>
        </nav>
    )
}
export default NavBar;