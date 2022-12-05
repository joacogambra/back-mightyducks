const Comment = require('../models/Comment')
const controller = {
    create: async (req, res) => {
        let { user } = req
        try {
            let new_comment = await Comment.create({ comment: req.body.comment, userId: user.id, showId: req.query.showId, photo: user.photo })
            res.status(201).json({
                response: console.log(new_comment),
                message: 'Comment Has Been Created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: 'Comment Could Not Be Created',
                message: error.message,
                succes: false
            })
        }
    },
    read: async (req, res) => {
        let shows = req.query.showId
        if (req.query.showId) {
            shows = { showId: req.query.showId }
        }
        try {
            let allComments = await Comment.find(shows).sort({ updatedAt: -1 })
            res.status(201).json({
                response: allComments,
                message: 'Got all comments',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                response: error.message,
                message: 'Comment Could Not Found',
                succes: false
            })
        }
    }
}
module.exports = controller;
