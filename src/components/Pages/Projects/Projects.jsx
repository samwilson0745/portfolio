import './projects.css';
import {useRef} from 'react';
import GithubLogo from '../../components/Logos/GithubLogo';
const Projects = ()=>{
    const projects = [
        {
            "name":"Moonquake-Visualized",
            "details":"Between 1968-72, Apollo missions gathered seismic data from the Moon. Now, we've innovatively visualized this data in an interactive web app. Users input a date, and animated seismic waves appear on a 3D Moon model.",
            "link":"https://moonquake-visualized.netlify.app/",
            "github":"https://shorturl.at/dnV24"
        },
        {
            "name":"Healthy Harvest",
            "details":"An app leveraging computer vision, AI, and machine learning identifies plant diseases from images, aiding farmers in optimal timing for tasks like watering and pruning.",
            "github":"https://github.com/samwilson0745/Healthy_Harvest",
            "link":""
        },
        {
            "name":"Prisavelo",
            "details":"Prisavelo App: Comprehensive health solution with expert guidance, personalized programs, and community support, addressing diverse wellness needs for overall well-being",
            "github":"https://shorturl.at/enoS5",
            "link":""
        },
        {
            "name":"TalkDock",
            "details":"Talkdock is a full-stack forum application built using the MERN stack, includes such as user registration, profile creation, discussion boards, and advanced search capabilities.",
            "github":"https://github.com/vishalkrsharma/forum-app",
            "link":""
        }
    ];
  
  
  const wrapperRef = useRef(null);
  

  


    return (
        <div className="project list-container" name="pojects">
            
                <div
                    ref={wrapperRef}
                    className='container'
                >
                    {projects.map((item, index) => (
                        <div key={index} className="column">
                            {item["link"]==""?<h1 className='project-title'>{item["name"]}</h1>:<a href={item["link"]} className='text-link'>{item["name"]}</a>}
                            <p className='project-subtitle'>{item["details"]}</p>
                            <div className='project-icon'>
                            <a href={item["github"]}>
                                <GithubLogo color='#98989F'/>
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
            
        </div>
    )
}
export default Projects