const defaultRouter = require('express').Router();
const User = require('../models/user.model')

defaultRouter.route('/').get( (req,res) => {
    res.json({
        message:"hello world"
    })
})


defaultRouter.route('/sign-up').post( async (req,res) => {
    const username = req.body.username
    const newUser = new User({ username })

    newUser.save()
        .then( () => { res.json("user created successfully") })
        .catch( err => { res.status(400).json("Error: "+err) })
})



module.exports = defaultRouter