import React  from 'react';
import PropTypes from "prop-types";
import HasAnswer from './HasAnswer'
import HasNoAnswer from './HasNoAnswer'

class CorrectAnswer extends React.Component {

  render() {
    let correctAnswer;
    let isPoll = this.props.currentQuestionnaire.is_poll;
    let isQAndA = this.props.currentQuestionnaire.is_q_and_a
    if (isPoll || isQAndA) {
      correctAnswer = <HasNoAnswer />
    } else {
      correctAnswer = <HasAnswer
                        correctAnswer = {this.props.currentQuestionnaire.correct_answer}
                      />
    }
    return (
      <div className="row align-items-center text-center">
        {correctAnswer}
      </div>
    )
  }
}


export default CorrectAnswer
