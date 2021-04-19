import React  from 'react';
import PropTypes from "prop-types";
import Identification from "./Identification";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import SelectLetters from "./SelectLetters";
import Poll from "./Poll";

class Questions extends React.Component {

  render() {
    const { currentQuestionnaire, questionnaires } = this.props;
    const totalQuestionnaires = questionnaires.length;
    const totalCurrentQuestionnaire = currentQuestionnaire.length;
    if (totalQuestionnaires === 0) return null;
    if (currentQuestionnaire === 0) return null;
    console.log("questions")
    console.log(currentQuestionnaire)
    console.log("questions")

    const isQueued = currentQuestionnaire.is_queued;
    const isOngoing = currentQuestionnaire.is_ongoing;
    const isDone = currentQuestionnaire.is_done;
    if (isQueued || isDone) return null;
    let choices;

    if (currentQuestionnaire.is_multiple_choice) {
      choices = <MultipleChoice/>;
    } else if (currentQuestionnaire.is_yes_or_no) {
      choices = <TrueFalse/>;
    } else if (currentQuestionnaire.is_identification || currentQuestionnaire.is_q_and_a) {
      choices = <Identification/>;
    } else if (currentQuestionnaire.is_select_letters) {
      choices = <SelectLetters/>;
    } else if (currentQuestionnaire.is_poll) {
      choices = <Poll/>;
    }
    return (
      <div className="question-wrapper">
        <div className="row">
          <div className="col-12">
            <span className="question">{this.props.currentQuestionnaire.question}</span>
            <div className="choices">
              {choices}
            </div>
            <div className="answer d-none">
              <div className="row text-center">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <h3>Correct Answer</h3>
                      <span className="answer--show">Lorem Ipsum</span>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h3>Congratulations</h3>
                      <h2>Juan Dela Cruz</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Questions.propTypes = {

// };

export default Questions
