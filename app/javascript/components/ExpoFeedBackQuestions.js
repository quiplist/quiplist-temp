import React  from 'react';
import PropTypes from "prop-types";
import ExpoFeedBackQuestionsRatings from './ExpoFeedBackQuestionsRatings';
import ExpoFeedBackQuestionsInput from './ExpoFeedBackQuestionsInput';

class ExpoFeedBackQuestions extends React.Component {

  render() {
    let formInput;
    if (this.props.rating.question_type === 0) {
      formInput = <ExpoFeedBackQuestionsRatings
        question = {this.props.rating.question}
        disabled = {this.props.rating.disabled}
        answer = {this.props.rating.answer}
        options = {this.props.rating.options}
        addFeedBackAnswers = {answer => this.props.addFeedBackAnswers(answer)}
      />

    } else {
      formInput = <ExpoFeedBackQuestionsInput
        question = {this.props.rating.question}
        disabled = {this.props.rating.disabled}
        answer = {this.props.rating.answer}
        addFeedBackAnswers = {answer => this.props.addFeedBackAnswers(answer)}
      />
    }
    console.log(this.props.rating)
    return (
      <div className="mb-3">
        {formInput}
      </div>
    )
  }
}


export default ExpoFeedBackQuestions
