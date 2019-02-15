import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Question from '../components/quiz/Question';

class CreateQuiz extends React.Component {
  state = {
    title: '',
    description: '',
    questions: [
      {
        question: '',
        answer: '',
        options: ['', '']
      },
      {
        question: '',
        answer: '',
        options: ['', '']
      }
    ]
  };

  questionChangeHandler = (event, questionIndex) => {
    let questions = [...this.state.questions];
    questions[questionIndex][event.target.name] = event.target.value;
    this.setState({ questions });
  };

  questionOptionChange = (value, questionIndex, optionIndex) => {
    let questions = [...this.state.questions];
    questions[questionIndex].options[optionIndex] = value;
    this.setState({ questions });
  };

  questionAddNewOption = (questionIndex) => {
    if (this.state.questions[questionIndex].options.length < 6) {
      let questions = [...this.state.questions];
      questions[questionIndex].options.push('');
      this.setState({ questions });
    } else {
      toast.error("Your Can't Create More Than Six Options");
    }
  };

  questionRemoveOption = (questionIndex, optionIndex) => {
    if (this.state.questions[questionIndex].options.length > 2) {
      let questions = [...this.state.questions];
      questions[questionIndex].options.splice(optionIndex, 1);
      this.setState({ questions });
    } else {
      toast.error('You Must Have Provide At Least Two Options');
    }
  };

  addNewQuestion = () => {
    let questions = [...this.state.questions];
    questions.push({
      question: '',
      answer: '',
      options: ['', '']
    });
    this.setState({ questions });
  };

  removeQuestion = (questionIndex) => {
    if (this.state.questions.length > 2) {
      let questions = [...this.state.questions];
      questions.splice(questionIndex, 1);
      this.setState({ questions });
    } else {
      toast.error('You Must Have Provide At Least Two Questions');
    }
  };

  render() {
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <ToastContainer />
          {this.state.questions.map((question, index) => (
            <Question
              questionNo={index}
              key={index}
              question={question}
              changeHandler={this.questionChangeHandler}
              optionChange={this.questionOptionChange}
              addNewOption={this.questionAddNewOption}
              removeOption={this.questionRemoveOption}
              removeQuestion={this.removeQuestion}
            />
          ))}
          <Button
            onClick={this.addNewQuestion}
            className='btn-lg btn-block my-2'
            color='success'
          >
            {' '}
            Add A New Question{' '}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default CreateQuiz;
