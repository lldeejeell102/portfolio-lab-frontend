import { useLoaderData } from "react-router-dom";

function About(props) {
    const about = useLoaderData()
    
    return (
      <div className="about">
        {/* <h2>{about.name}</h2> */}
        <h2>Contact Me: <a href="mailto:daniel.ji0923@gmail.com">{about.email}</a></h2>
        <h2>{about.bio}</h2>
      </div>
    )
  }
  
export default About;
  