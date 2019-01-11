const router = require('express').Router()
const { register, activateAccount, getAllUsers, removeUser } = require("../controllers/userController");


router.post('/register', register)
router.get('/activateAccount/:token', activateAccount)
router.delete('/delete/:id', removeUser)
router.get('/all', getAllUsers)


module.exports = router