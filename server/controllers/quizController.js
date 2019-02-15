const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const User = require('../models/User');
const { catchError } = require('../utils/error');

const quizValidator = require('../validators/quizValidator.js');

module.exports = {
  async createQuiz(req, res) {
    const {
      title = '',
      description = '',
      tags = [],
      category = '',
      skill = '',
      author = '',
      questions = [],
      durations = '',
      published = false
    } = req.body;

    let validate = quizValidator({
      title,
      description,
      category,
      skill,
      author,
      questions
    });

    if (!validate.isValid) {
      res.status(400).json(validate.error);
    } else {
      try {
        const questionsID = questions.map(async (question) => {
          let newQuestion = await new Question({ ...question }).save();
          return newQuestion._id;
        });

        let savedQuestions = await Promise.all(questionsID);

        const quiz = await new Quiz({
          title,
          description,
          tags,
          category,
          skill,
          author,
          questions: savedQuestions,
          durations,
          published
        }).save();
        return res.status(201).json(quiz);
      } catch (error) {
        return catchError(res, error);
      }
    }
  },

  async getQuizByID(req, res) {
    let { id } = req.params;
    let quiz = await Quiz.findById(id)
      .populate('author', 'name email')
      .populate('skill', 'name slug')
      .populate('category', 'name slug')
      .populate('questions');

    res.status(200).json(quiz);
  },

  async getAllQuiz(req, res) {
    let quiz = await Quiz.find();
    res.status(200).json(quiz);
  },

  async getQuestions(req, res) {
    let questions = await Question.find();
    res.json(questions);
  },

  async removeQuiz(req, res) {
    let { id } = req.params;
    try {
      await Quiz.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Quiz Remove Successfully'
      });
    } catch (err) {
      catchError(res, err);
    }
  },

  async removeQuestion(req, res) {
    let { id } = req.params;
    try {
      await Question.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Question Remove Successfully'
      });
    } catch (err) {
      catchError(res, err);
    }
  }
};
