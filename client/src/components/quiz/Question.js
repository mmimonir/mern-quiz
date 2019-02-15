import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import TextInput from '../forms/TextInput';

class Question extends Component {
  renderOption = (options) =>
    options.map((option, index) => (
      <div>
        <TextInput
          name='option'
          placeholder={`Option ${index + 1}`}
          index={index}
          value={option}
          key={index}
          changeHandler={(event) =>
            this.props.optionChange(
              event.target.value,
              this.props.questionNo,
              index
            )
          }
        />
        <input
          className='btn btn-danger btn-sm m-1'
          type='button'
          value='Remove'
          onClick={() => this.props.removeOption(this.props.questionNo, index)}
        />
      </div>
    ));

  render() {
    let { question, answer, options } = this.props.question;
    let {
      changeHandler,
      addNewOption,
      questionNo,
      removeQuestion
    } = this.props;
    return (
      <Card className='mb-3'>
        <CardBody>
          <div className='d-flex'>
            <h4>Question No: {questionNo + 1}</h4>
            <Button
              color='warning'
              outlilne
              className='ml-auto'
              onClick={() => removeQuestion(questionNo)}
            >
              {' '}
              Remove{' '}
            </Button>
          </div>
          <TextInput
            name='question'
            label='Question:'
            placeholder='What is your question'
            value={question}
            changeHandler={(event) => changeHandler(event, questionNo)}
          />
          <TextInput
            name='answer'
            label='Answer:'
            placeholder='What is your answer'
            value={answer}
            changeHandler={(event) => changeHandler(event, questionNo)}
          />
          <p>Add Your Options</p>
          {this.renderOption(options)}
          <Button
            outline
            color='warning'
            className='d-block m-auto'
            onClick={() => addNewOption(questionNo)}
          >
            {' '}
            Add New Option{' '}
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default Question;
