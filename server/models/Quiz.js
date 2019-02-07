const mongoose = require('mongoose')
const Schema = mongoose.Schema

const common = {
    type: String,
    required: true,
    trim: true
}
const QuizSchema = new Schema({
    title: {
        ...common
    },
    description: {
        ...common
    },
    tags: [String],
    category: String,
    skill: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    question: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question',
            required: true
        }
    ],
    duration: Date,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant'
        }
    ]
}, {timestamps: true})

const Quiz = mongoose.model('Quiz', QuizSchema)

module.exports = Quiz