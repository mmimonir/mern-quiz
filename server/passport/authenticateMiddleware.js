const passport = require('passport')

module.exports = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err){
            next(err)
        }

        if(!user){
            return res.status(400).json({
                message: 'Authencation Failed'
            })
        }
        req.user = user
        next()
    })(req, res, next)
}