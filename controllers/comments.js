const Comment = require('../models/Comment')
const User = require('../models/User')
const Show = require('../models/Show')
const Itinerary = require('../models/Itinerary')

const controller = {
    create: async (req, res) => {
        let { user } = req
        let query = {}
        try {
            let model
            if (req.query.showId) {
                query = { _id: req.query.showId }
                model = await Show.findOne(query)
            }
            else if (req.query.itineraryId) {
                query = { _id: req.query.itineraryId }
                model = await Itinerary.findOne(query)
            }
            if (model) {
                let new_comment = await Comment.create({ comment: req.body.comment, userId: user.id, photo: user.photo, name: user.name })
                model.comment.push(new_comment._id)
                model.save()
                console.log(new_comment);
                res.status(201).json({
                    response: new_comment,
                    message: 'Comment Has Been Created',
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Comment Could Not Be Created',
                    succes: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Comment Could Not Be Created',
                message: error.message,
                succes: false
            })
        }
    },
    read: async (req, res) => {
        let query = {}
        let model
        try {
            if (req.query.showId) {
                query = { _id: req.query.showId }
                model = await Show.findOne(query, '_id').populate({ path: 'comment', options: { sort: [[['updatedAt', -1]]] } })
            } else if (req.query.itineraryId) {
                query = { _id: req.query.itineraryId }
                model = await Itinerary.findOne(query, '_id').populate({ path: 'comment', options: { sort: [[['updatedAt', -1]]] } })
            }
            if (model) {
                let newModel = await model.populate({ path: 'comment.userId', select: 'name, photo, id' })
                res.status(201).json({
                    response: newModel,
                    message: 'Got all comments',
                    succes: true
                })
            } else {
                res.status(404).json({
                    message: 'Comment Could Not Be showed',
                    succes: false
                })
            }
        } catch (error) {
            res.status(400).json({
                response: error.message,
                message: 'Comment Could Not Found',
                succes: false
            })
        }
    },
    update: async (req, res) => {
        let update = req.body
        let { id } = req.params
        try {
            let commentUpdate = await Comment.findByIdAndUpdate(id, update, { new: true })
            if (commentUpdate) {
                res.status(200).json({
                    response: commentUpdate,
                    success: true,
                    message: "Your comment was updated!"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: error.message
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    delete: async (req, res) => {
        let { id } = req.params
        try {
            let deleteComment = await Comment.findByIdAndDelete({ _id: id })
            if (deleteComment) {
                res.status(200).json({
                    success: true,
                    message: "Your comment was deleted!",
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Your comment could not deleted!"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                response: error.response
            })
        }
    }
}

module.exports = controller;
