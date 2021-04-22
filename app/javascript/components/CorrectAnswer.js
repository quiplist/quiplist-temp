import React  from 'react';
import PropTypes from "prop-types";

class CorrectAnswer extends React.Component {

  render() {
    return (
      <div className="row text-center">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <h3>Correct Answer</h3>
              <span className="answer--show">{this.props.currentQuestionnaire.correct_answer}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default CorrectAnswer
