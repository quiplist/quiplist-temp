import React  from 'react';
import PropTypes from "prop-types";

class ExpoFeedBackQuestionsInput extends React.Component {

  render() {
    return (
      <div>
        <label htmlFor="question" className="form-label">{this.props.question}</label>
        <input type="text" className="form-control" value={this.props.answer} id="answer" name="answer" disabled={this.props.disabled}/>
      </div>
    )
  }
}


export default ExpoFeedBackQuestionsInput
