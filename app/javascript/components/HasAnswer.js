import React  from 'react';
import PropTypes from "prop-types";

class HasAnswer extends React.Component {

  render() {
    return (
      <div className="row align-items-center text-center">
        <div className="col-6">
          <h3>Correct Answer</h3>
        </div>
        <div className="col-6">
          <span className="answer--show">{this.props.correctAnswer}</span>
        </div>
      </div>
    )
  }
}


export default HasAnswer
