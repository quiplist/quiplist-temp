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
          id={this.props.ratingId}
          data-id={this.props.i}
          disabled={this.props.disabled}
          onChange={(e) => this.props.handleChange(e, this.props.guestListId, this.props.feedBackId,)}
        />

      </div>
    )
  }
}


export default ExpoFeedBackQuestionsInput
