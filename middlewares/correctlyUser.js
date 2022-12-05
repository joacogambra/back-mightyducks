const { ownerResponse, notSighted } = require("../config/responses")

const correctlyUser = model => [
  async (req, res, next) => {
    let activity = await model.findOne({ _id: req.params.id })
    if (activity) {
      if (activity.userId.equals(req.user.id)) {
        return next()
      } return ownerResponse(req, res)
    } return notSighted(req, res)
  },
]

module.exports = correctlyUser;