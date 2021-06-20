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
        guestListId = {this.props.rating.guest_list_id}
        feedBackId = {this.props.rating.feed_back_id}
        addFeedBackAnswers = {answer => this.props.addFeedBackAnswers(answer)}
        handleChange = {(i, e) => this.props.handleChange(i, e)}
        i = {this.props.i}
      />

    } else {
      formInput = <ExpoFeedBackQuestionsInput
        question = {this.props.rating.question}
        disabled = {this.props.rating.disabled}
        answer = {this.props.rating.answer}
        addFeedBackAnswers = {answer => this.props.addFeedBackAnswers(answer)}
        handleChange = {(i, e) => this.props.handleChange(i, e)}
        guestListId = {this.props.rating.guest_list_id}
        feedBackId = {this.props.rating.feed_back_id}
        i = {this.props.i}
      />
    }
    return (
      <div key={this.props.i} className="mb-3">
        {formInput}
      </div>
    )
  }
}


export default ExpoFeedBackQuestions
