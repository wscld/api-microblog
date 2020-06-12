const UserService = require("../services/user.service");

const checkSession = async function (req, res, next) {
    const [, token] = req.headers.authorization.split(' ')
    try {
        const payload = await jwt.verify(token)
        const user = await UserService.findOne({ _id: payload.user._id })

        if (!user) {
            return res.send(401)
        }

        req.auth = user

        next()
    } catch (error) {
        res.send(401, error)
    }
}

module.exports = checkSession;