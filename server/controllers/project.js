
const {errorHandler} = require('../authentication')
const Project = require('../models/Project');


module.exports.uploadProject = async (req, res) => {
    try {
        const newProject = new Project({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link
        });
        const savedProject = await newProject.save();
        if(savedProject) {
            res.status(201).send({success: true, savedProject});
        } else {
            res.status(201).send({success: false, message: "Failed to save new project"});
        }
    } catch (error) {
        errorHandler(error, req, res);
    }
} 

module.exports.updateProject = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const updatedDetails = ({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link
        });

        const updatedProject = await Project.findByIdAndUpdate(projectId, updatedDetails, {new:true});
        if(updatedProject) {
            res.status(201).send({success: true, updatedProject});
        } else {
            res.status(201).send({success: false, message: "Failed to update project details"});
        }
    } catch (error) {
        errorHandler(error, req, res);
    }
}

module.exports.getAllProjects = async (req, res) => {
    try{
        const projects = await Project.find({});
        if(projects) {
            res.status(200).send({success: true, projects});
        } else {
            res.status(404).send({success: false, message: "No projects found"});
        }
    } catch(error) {
        errorHandler(error, req, res);
    }
}

module.exports.deleteProject = async (req, res) => {
    res.send('deleteProject is working')   
}

module.exports.getProject = async (req, res) => {
    res.send('getProject is working')   
}


