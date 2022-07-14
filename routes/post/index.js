const express = require('express');
const postRouter = express.Router();
const postController = require('../../controller/post');

// 모든 모집글 조회 GET
postRouter.get('/', postController.getAllPosts);

// 특정 모집글 조회 GET
postRouter.get('/:postId', postController.getOnePost);

// 모집글 작성 POST
postRouter.post('/', postController.writePost);

// 모집글 수정 PATCH
postRouter.patch('/:postId', postController.updatePost);

// 모집글 삭제 DELETE
postRouter.delete('/:postId', postController.deletePost);


module.exports = postRouter;