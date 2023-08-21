import "./home.css";
import { TypeAnimation } from 'react-type-animation';
import soham from '../../../assets/profile/soham-nobg.png';
import linkedInIcon from '../../../assets/home/linkedin.svg'
import LinkedInLogo from "./Logos/LinkedInLogo";
const Home = ()=>{
    
    const container1 = {
        width:"45vw",
    }
    return(
        <div className="home row" name="home" >
            <div style={container1}>
                <h1>Welcome !</h1>
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
                style={{ fontSize: '3em', display: 'inline-block' }}
                repeat={Infinity}
            />
            <h4>I make the complex simple</h4>
            <div className="row-icons">
                <a href="https://www.linkedin.com/in/soham-deb-majumder-35b959210/" className="custom-icon-link">
                    <LinkedInLogo color="#0077B5"/>
                </a>
                <a href="https://www.linkedin.com/in/soham-deb-majumder-35b959210/" className="custom-icon-link">
                    <LinkedInLogo color="blue"/>
                </a>
                <a href="https://www.linkedin.com/in/soham-deb-majumder-35b959210/" className="custom-icon-link">
                    <LinkedInLogo color="blue"/>
                </a>
                <a href="https://www.linkedin.com/in/soham-deb-majumder-35b959210/" className="custom-icon-link">
                    <LinkedInLogo color="blue"/>
                </a>
            </div>
            </div>
            <div>
                <img src={soham} alt="" className="my-image"/>
            </div>
        </div>
    )
}
export default Home;