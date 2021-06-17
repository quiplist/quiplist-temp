import React  from 'react';
import PropTypes from "prop-types";

class ExpoFeedBackQuestionsRatings extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor={this.props.ratingId} className="form-label">{this.props.question}</label>
        <select className="answer mb-3 form-select"
          disabled={this.props.disabled}
          name="answer"
          id={this.props.ratingId}
          data-id={this.props.i}
          onChange={(e) => this.props.handleChange(this.props.guestListId, this.props.feedBackId, e)}
          >
            {Object.keys(this.props.options).map(function (key, index) {
            return (
              <option key={index} value={key}>{this.props.options[key]}</option>
              );
          }, this)}
        </select>
      </div>
    )
  }
}


export default ExpoFeedBackQuestionsRatings
