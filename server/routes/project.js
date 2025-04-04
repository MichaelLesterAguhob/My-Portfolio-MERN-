const express = require('express');
const router = express.Router()
const projectsController =  require('../controllers/project')
const {upload, uploadProject} = require("../controllers/project");

router.post('/', upload, uploadProject);
router.get('/', projectsController.getAllProjects);
router.patch('/:projectId', projectsController.updateProject);
router.delete('/:projectId', projectsController.deleteProject);
router.get('/:projectId', projectsController.getProject);


 
module.exports = router 