import "./home.css";
import { TypeAnimation } from 'react-type-animation';
import Button from "../../components/Button/Button";
import { Link } from "react-scroll";

const Home = ()=>{
    
    const container1 = {
        width:"45vw",
    }
    return(
        <div className="home row" name="home" >
            <div style={container1}>
                <h1 style={{fontSize:'2.7em',color:'white',fontWeight:"bold",letterSpacing:"3px",padding:"0 3px"}}>Soham Deb Majumder</h1>
                <TypeAnimation
                    sequence={[
        // Same substring at the start will only be typed out once, initially
                    "I'm Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "I'm Freelancer",
                    1000,
                    "I'm Video Editor",
                    1000,
                    ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '4em', display: 'inline-block' ,color:'white',letterSpacing:"3px"}}
                repeat={Infinity}
            />
            <div className="tag">
                <h4 style={{color:"white",letterSpacing:"3px",fontWeight:"bold"}}>
                    Full Stack Developer |
                    Flutter Developer | 
                    Django |
                    Java | 
                    Python 
                </h4>
            </div>
            
            <div>
                <Button><Link activeClass="my-active" smooth={true} spy={true} to="contact">Contact me</Link></Button>
            </div>
            </div>
        </div>
    )
}
export default Home;