const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswerSchema = new Schema({
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    answers: [
        {
            questiion: {
                type: Schema.Types.ObjectId,
                ref: 'Question',
                required: true
            },
            answer: {
                type: String,
                required: true,
                trim: true
            }
        }
    ]
}, {timestamps: true})

const Answer = mongoose.model('Answer', AnswerSchema)

module.exports = Answer