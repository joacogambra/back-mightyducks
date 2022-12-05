const Show = require('../models/Show')
const controller = {
    read: async (req, res) => {
        let query = {}
        if (req.query.hotelId) {
            query = { hotelId: req.query.hotelId }
        }
        if (req.query.userId) {
            query = { userId: req.query.userId }
        }
        if (req.query._id) {
            query = { _id: req.query._id }
        }
        try {
            let shows = await Show.find(query, '-userId')
            if (shows.length) {
                res.status(200).json({
                    response: shows,
                    success: true,
                    message: "Shows are filtered successfully"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "Couldn't find shows"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    create: async (req, res) => {
        try {
            let new_show = await Show.create(req.body)
            res.status(201).json({
                response: new_show,
                success: true,
                message: "The Show was created successfully"
            })
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: "Couldn't create the Show, you must be logged in",
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        let id = req.params
        try {
            let shows = await Show.findOneAndUpdate(req.params, req.body, { new: true })
            if (shows) {
                res.status(200).json({
                    response: shows,
                    success: true,
                    message: "Show updated successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't update the show"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req, res) => {
        let remove = req.body
        let id = req.params.id
        try {
            let shows = await Show.findOneAndDelete({ _id: id }, remove)
            if (shows) {
                res.status(200).json({
                    response: shows,
                    success: true,
                    message: "Show were deleted successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't find the show"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    one: async (req, res) => {
        let { id } = req.params
        try {
            let show = await Show.findById(id)
            if (show) {
                res.status(200).json({
                    response: show,
                    success: true,
                    message: "Show found successfully"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Couldn't find Show"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}
module.exports = controller;