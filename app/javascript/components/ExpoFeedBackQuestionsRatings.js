import React  from 'react';
import PropTypes from "prop-types";

class ExpoFeedBackQuestionsRatings extends React.Component {

  render() {
    console.log(this.props.options)
    return (
      <div>
        <label htmlFor="question" className="form-label">{this.props.question}</label>
        <select className="mb-3 form-select"
          disabled={this.props.disabled}
          value={this.props.answer}
          onChange={this.handleChange}>
            {Object.keys(this.props.options).map(function (key) {
            return (
              <option value={key}>{this.props.options[key]}</option>
              );
          }, this)}
        </select>
      </div>
    )
  }
}


export default ExpoFeedBackQuestionsRatings
