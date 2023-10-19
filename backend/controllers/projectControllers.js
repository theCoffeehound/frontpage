const Project = require("../models/projectModel");
const { Types, ObjectId } = require("mongoose");


//  Finds all projects from database
const getAllProjects = (req, res, next) => {

  console.log("GET projects request");
  Project.find()
    .then(projects => {res.json(projects), "Hello"})
    .catch(error => res.status(400).json('Error : ' + error));
};


//  FETCHES a project by id from URL parameter 
const getProject = (req, res, next) => {

  const projectID = req.params._id;

  // DEBUG BEGINS
  console.log("Fetch project with this ID")
  console.log(projectID)
  // DEBUG ENDS

  Project.findById(projectID)
    .then(project => res.json(project))
    .catch(error => res.status(400).json("ERROR : " + error));


};


//  Add new project item to DB
const AddProject = (req, res, next) => {

  const _id = new Types.ObjectId();
  const name = req.body.name;
  const description = req.body.description;
  const phase = req.body.phase
  const date = req.body.date;
  
  const newProject = new Project({
    _id,
    name,
    description,
    phase,
    date,
  });
  
  // DEBUG BEGINS
  console.log("POST projects request");
  // DEBUG BEGINS
  newProject.save()
    .then(() => res.json('New project added to db!'))
    .catch(err => res.status(400).json('Error: ', err));
};




const updateProject = async (req, res, next) => {
  
  console.log("PATCH project request");
  const _id = req.params._id;
  const phase = req.body.phase;

  const project = await Project.findById(_id);
  if (!project) {
    return (res.status(404).send("Project cannot be found"));
  }
  try {
    const updateProject = await Project.findByIdAndUpdate(_id,
      {
        "phase": phase
      }
    );

    res.send("korjattu onnistuneesti: " + updateProject);
    res.status();
  }
  catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  };
  

};




exports.updateProject = updateProject;
exports.getAllProjects = getAllProjects;
exports.AddProject = AddProject;
exports.getProject = getProject;