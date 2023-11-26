import { Link } from 'react-scroll';
import './navbar.css';
import { useState,useEffect } from 'react';
import GithubLogo from './Logos/GithubLogo';
import LinkedInLogo from './Logos/LinkedInLogo';
import EmailLogo from './Logos/EmaiLogo';
const NavBar = ()=>{
    const [visible, setVisible] = useState(true);
  let timeoutId;

  const hideNavbar = () => {
    setVisible(false);
  };

  const handleScroll = () => {
    setVisible(true)
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideNavbar, 1000); // Adjust the delay time as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove',()=>{
      setVisible(true);
    })
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove',()=>{
        setVisible(false);
      });
      clearTimeout(timeoutId);
    };
  }, []);
    return (
        <nav className={`navbar ${visible ? 'visible':'hidden'}`}>
            <div className='links'>
                    <Link  smooth={true} spy={true} to="home">Home</Link>
                    <Link  smooth={true} spy={true} to="projects">Projects</Link>
                    <Link  smooth={true} spy={true} to="skills">Skills</Link>
                    <Link  smooth={true} spy={true} to="about">About</Link>
                    <Link  smooth={true} spy={true} to="contact">Contact</Link>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/soham-deb-majumder-35b959210/" className="custom-icon-link">
                    <LinkedInLogo color="#98989F"/>
                </a>
                <a href="https://github.com/samwilson0745" className="custom-icon-link">
                    <GithubLogo color="#98989F" />
                </a>
                <a href="mailto:sohamdebmajumder@gmail.com?subject=SendMail&body=Description" className="custom-icon-link">
                  <EmailLogo color="#98989F"  />
                </a>
            </div>
        </nav>
    )
}
export default NavBar;