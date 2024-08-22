const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments for a post
router.get('/', withAuth, async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            where: {postId: req.session.post_id},
        });
        res.json(allComments);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post a comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;