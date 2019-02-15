const router = require('express').Router()
const { 
    createQuiz, 
    getQuestions, 
    getQuizByID, 
    removeQuestion, 
    getAllQuiz,
    removeQuiz
} = require('../controllers/quizController')
const authenticate = require('../passport/authenticateMiddleware')


router.post('/create', authenticate, createQuiz)
router.get('/questions', getQuestions)
router.get('/quizzes/:id', getQuizByID)
router.delete('/remove/:id', removeQuestion)
router.get('/all', getAllQuiz)
router.delete('/delete/:id', removeQuiz)

module.exports = router