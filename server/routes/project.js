const express = require('express');
const router = express.Router()
const projectsController =  require('../controllers/project')

router.post('/', projectsController.uploadProject);
router.patch('/:projectId', projectsController.updateProject);
router.get('/', projectsController.getAllProjects);
router.delete('/:projectId', projectsController.deleteProject);
router.get('/:projectId', projectsController.getProject);


 
module.exports = router 