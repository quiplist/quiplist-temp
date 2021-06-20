import React  from 'react';
import PropTypes from "prop-types";

class ExpoFeedBackQuestionsRatings extends React.Component {

  render() {
    return (
      <div>

        <label htmlFor={this.props.ratingId} className="form-label">{this.props.question}</label>
        <select className="answer mb-3 form-select"
          defaultValue="default"
          disabled={this.props.disabled}
          name="answer"
          defaultValue={this.props.answer}
          id={this.props.ratingId}
          data-id={this.props.i}
          onChange={(e) => this.props.handleChange(e, this.props.guestListId, this.props.feedBackId, this.props.i)}
          >
            <option value="default" defaultValue disabled="disabled">Select an option</option>
            <option value="0">Poor</option>
            <option value="1">Fair</option>
            <option value="2">Good</option>
            <option value="3">Very Good</option>
            <option value="4">Excellent</option>
            {/* {Object.keys(this.props.options).map(function (key, index) {
            return (
              <option key={index} value={key}>{this.props.options[key]}</option>
              );
          }, this)} */}
        </select>
      </div>
    )
  }
}


export default ExpoFeedBackQuestionsRatings
