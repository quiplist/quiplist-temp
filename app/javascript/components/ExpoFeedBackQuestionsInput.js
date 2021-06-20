import React  from 'react';
import PropTypes from "prop-types";

class ExpoFeedBackQuestionsInput extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor={this.props.ratingId} className="form-label">{this.props.question}</label>
        <input
          type="text"
          className="answer form-control"
          name="answer"
          defaultValue={this.props.answer}
          id={this.props.ratingId}
          data-id={this.props.i}
          disabled={this.props.disabled}
          onChange={(e) => this.props.handleChange(e, this.props.guestListId, this.props.feedBackId, this.props.i)}
        />

      </div>
    )
  }
}


export default ExpoFeedBackQuestionsInput
