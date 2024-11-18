const express = require('express');
const router = express.Router()
const projectsController =  require('../controllers/projects')

router.post('/', projectsController.uploadProject);
router.patch('/', projectsController.updateProject);
router.get('/', projectsController.getAllProjects);
router.delete('/', projectsController.deleteProject);
router.get('/:projectId', projectsController.getProject);



module.exports = router;