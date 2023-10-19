import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../../styles/Project.css";


function Project() {


  const [projects, setProjects] = useState([]);
  const params = useParams();

  

  const fetchProject = async () => {
    console.log("Fetching data with this param: " + params.id)              //  GET request to 
    await axios.get(`http://localhost:5000/api/projects/${params.id}`)      //  Fetches one project from api with url parameter
      .then(response => {
        setProjects([response.data]);                                       // response is object so it needs to be assigned between []-chars
        console.log("Projects were fetched:", response.status);
      })
      .catch((err => console.log("Error: ", err)));
  };


  //  Waits params.id and after that is executed upon load and refresh
  useEffect(() => {
    fetchProject();
  }, [params.id]);



  //  Pushes response data to  ProjectData
  const ProjectList = () => {
    return (
        <div>
            {
                projects.map((s) => {

                        return (
                            <ProjectData
                                key={s._id}
                                _id={s._id}
                                name={s.name}
                                description={s.description}
                                phase={s.phase}
                            />
                        );
                    
                })
            }
        </div>
    );
  }

    //  Project list memeber construction
    const ProjectData = ({ _id, name, description, phase }) => {
      return (
        <>
          <h1 className="project-name" id="project-name">{name}</h1>
          <div className="project-info">
            <h3 className="project-title" >Phase:</h3>
            <p id="project-phase">{phase === "idea" ? 'It\'s only an idea' : phase === "dev" ? 'This is in development' :  phase === "rdy" ? 'Mission successful' : phase}</p>
            <h3 className="project-title" >Description: </h3>
            <p id="project-desc">{description}</p>
          </div>
        </>
      )
    }


  //  RENDER
  return (
    <div className="Project">
      <ProjectList />
    </div>
  );
}

export default Project;