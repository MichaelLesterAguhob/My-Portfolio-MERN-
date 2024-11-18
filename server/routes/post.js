const express = require('express');
const router = express.Router()
const postController =  require('../controllers/post')

router.post('/', postController.uploadPost);
router.patch('/', postController.updatePost);
router.get('/', postController.getAllPosts);
router.delete('/', postController.deletePost);
router.get('/:postId', postController.getPost);



module.exports = router;