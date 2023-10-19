import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import '../../styles/Projectmanager.css'


function ProjectManager(){
    const [projects, setProjects] = useState([]);
    const oma_url = "192.168.1.107:5000"
    const tila = ["idea", "dev", "rdy"];
    const [showForm, setShowForm] = useState(false);
    const [projectName, setProjectName] = useState("1");
    const [projectDesc, setProjectDesc] = useState("1");
    const [projectDate, setProjectDate] = useState();
    const newProjectPhase = "idea";



    //  Project list memeber construction
    const Project = ({ _id, name, phase }) => {
        return (
            <>
                <li className="list-item-container">
                    <div className="list-item">
                        {phase === "idea" ? null : <button id="update-Btn left-arrow" onClick={() => downgradeProject(_id, phase)}>{"<"}</button>}
                        <Link className="project-link" to={"project/" + _id}>
                            {name}<span style={{display: "none"}}>, <span id="projectId">{_id}</span>, <span id="projectPhase">{phase}</span></span>
                        </Link>
                        {phase === "rdy" ? null : <button id="update-Btn right-arrow" onClick={() => upgradeProject(_id, phase)} >{">"}</button>}
                    </div>
                </li>
            </>
        )
    }


    //  GET request to API
    //  Fetch projects to frontpage
    const fetchProjects = async () => {
        await axios.get(`http://${oma_url}/api/projects/`)
            .then(response => {
                setProjects(response.data);
                console.log("Projects were fetched:", response.status);
            })
            .catch((err => console.log("Error: ", err)));
    };


    //  PATCH request to API
    //  Updates seleted project
    const upgradeProject = async (foo, bar) => {
        const tila = ["idea", "dev", "rdy"];
        let idmuuttuja = foo;
        let phasemuuttuja = bar;
        const index = tila.indexOf(bar) + 1;
        console.log("tila.find: " + index)
        console.log("tila.find: " + tila[index])


        console.log("Foo " + idmuuttuja);
        console.log("Bar " + phasemuuttuja);
        console.log("updateProject ajettu");
        await axios.patch(`http://${oma_url}/api/projects/${idmuuttuja}`, { "phase": tila[index].toString() })
            .then(res => {
                console.log("Viedään dataa tietokantaan muokkauksen jälkeen : " + idmuuttuja + " ja " + tila[index].toString());
                console.log(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        window.location.reload(false);
    };

    //  PATCH request to API
    //  Updates seleted project
    const downgradeProject = async (foo, bar) => {
        const tila = ["idea", "dev", "rdy"];
        let idmuuttuja = foo;
        let phasemuuttuja = bar;
        const index = tila.indexOf(bar) - 1;
        console.log("tila.find: " + index)
        console.log("tila.find: " + tila[index])


        console.log("Foo " + idmuuttuja);
        console.log("Bar " + phasemuuttuja);
        console.log("updateProject ajettu");
        await axios.patch(`http://${oma_url}/api/projects/${idmuuttuja}`, { "phase": tila[index].toString() })
            .then(res => {
                console.log("Viedään dataa tietokantaan muokkauksen jälkeen : " + idmuuttuja + " ja " + tila[index].toString());
                console.log(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        window.location.reload(false);
    };

    const addProject = async (e) => {
        e.preventDefault();
        // Date object
        console.log(projectName, projectDesc)
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
        let currentYear = date.getFullYear();
        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;   // we will display the date as DD-MM-YYYY 
        console.log("Ajetaan POSTAUS")
        console.log("aika " + date)
        console.log("The current date is " + currentDate);
        await axios.post(`http://${oma_url}/api/projects/add/`, {"name": projectName, "desc": projectDesc, "phase": newProjectPhase, "date": date})
            .then(res => {
                console.log(res.data);
                console.log(res);
                setShowForm(false)
            })
            .catch(err => {
                console.log(err);
            });
        
        window.location.reload(false);
    };



    //  Will always be executed upon load and refresh
    useEffect(() => {
        fetchProjects();
    }, []);



    //  DISCLAIMER:
    //  i am NOT PROUD of what is to come after this line :) 
    const IdeaProjectList = () => {
        return (
            <>
                {
                    projects.map((s) => {


                        //  IDEA
                        if (s.phase === "idea") {
                            return (
                                <Project
                                    key={s._id}
                                    _id={s._id}
                                    phase={s.phase}
                                    name={s.name}
                                />
                            );
                        }
                    })
                }
            </>
        );
    }

    const DevProjectList = () => {
        return (
            <>
                {projects.map((s) => {
                    if (s.phase === "dev") {
                        return (
                            <Project
                                key={s._id}
                                _id={s._id}
                                phase={s.phase}
                                name={s.name}
                            />
                        );
                    }
                })
                }
            </>
        );
    }

    const ReadyProjectList = () => {
        return (
            <>
                {
                    projects.map((s) => {


                        //  DEV
                        if (s.phase === "rdy") {
                            return (
                                <Project
                                    key={s._id}
                                    _id={s._id}
                                    phase={s.phase}
                                    name={s.name}
                                />
                            );
                        }
                    })
                }
            </>
        );
    }

    //  Laittaa jokaisen käyttäjän omalle riville
    const ProjectList = () => {
        return (
            <>
                {
                    projects.map((s) => {
                        return (
                            <Project
                                key={s._id}
                                _id={s._id}
                                phase={s.phase}
                                name={s.name}
                            />
                        );
                    })
                }
            </>);

    }


    return (
        <div className="Main-screen">
            <h1 className="main-title">Project Manager</h1>

            <div className="add-container">
                <button onClick={() => { setShowForm(true) }} className="addbtn">Add new project</button>
            </div>

            <div className="newproject-container">
                {
                    showForm === true ?

                        <form className="formi" onSubmit={addProject}>

                            <label htmlFor="input-name" id="label-name">Project name: </label>
                            <input type="text" id="input-name" onChange={(e) => setProjectName(e.target.value)} />


                            <label htmlFor="input-desc" id="label-desc">Description: </label>
                            <textarea name="description" id="input-desc" cols="30" rows="10" onChange={(e) => setProjectDesc(e.target.value)}/>


                            <button type="submit" className="submitBtn">
                                Add new project
                            </button>
                        </form>

                        : null
                }
            </div>
            <div className="box-container">
                <div className="box" id="idea-box">
                    <h3>Idea</h3>
                    <ul className="project-list">
                        <IdeaProjectList />
                    </ul>
                </div>

                <div className="box" id="dev-box">
                    <h3>In development</h3>
                    <ul className="project-list">
                        <DevProjectList />
                    </ul>
                </div>

                <div className="box" id="ready-box">
                    <h3>Ready</h3>
                    <ul className="project-list">
                        <ReadyProjectList />
                    </ul>
                </div>
            </div>
            <div className="all-projects">
                <h3>All</h3>
                <ul>
                    <ProjectList />
                </ul>
            </div>

        </div>
    );

}
export default ProjectManager;