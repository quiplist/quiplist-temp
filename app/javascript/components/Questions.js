import React  from 'react';
import PropTypes from "prop-types";
import Identification from "./Identification";
import MultipleChoice from "./MultipleChoice";
import TrueFalse from "./TrueFalse";
import SelectLetters from "./SelectLetters";
import Poll from "./Poll";
import CorrectAnswer from "./CorrectAnswer";

class Questions extends React.Component {

  constructor() {
    super();
  }

  submitAnswer = answer => {

    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    this.props.setIsAnsweredQuestionnaire(true)
    const url = "/api/v1/answers";
    const body = {
      answer: {
        user_id: this.props.currentUser.id,
        answer: answer,
        questionnaire_id: this.props.currentQuestionnaire.id
      }
    }



    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(result => {
      //this.addChat(result)
      //this.props.chatCable.send({result})
    })

  }

  render() {
    const { currentQuestionnaire, questionnaires } = this.props;
    let choices;
    let correctAnswer;

    if (currentQuestionnaire === undefined || questionnaires === undefined) return null;
    const totalQuestionnaires = questionnaires.length;

    if (totalQuestionnaires === 0) return null;


    const isQueued = currentQuestionnaire.is_queued;
    const isOngoing = currentQuestionnaire.is_ongoing;
    const isDone = currentQuestionnaire.is_done;
    const isDisplay = currentQuestionnaire.is_display;
    if (isQueued) return null;

    if (isDisplay) {
      if (isDone) {
        correctAnswer = <CorrectAnswer
                          currentQuestionnaire = {this.props.currentQuestionnaire}
                        />
      } else if (isOngoing) {

        let isAnsweredOrIsAdmin = (this.props.isAnsweredQuestionnaire || this.props.isAdmin)
        console.log("isAnsweredOrIsAdmin")
        console.log(isAnsweredOrIsAdmin)
        console.log(this.props.isAdmin)
        console.log("isAnsweredOrIsAdmin")
        if (currentQuestionnaire.is_multiple_choice) {
          choices = <MultipleChoice
                      currentQuestionnaire = {this.props.currentQuestionnaire}
                      submitAnswer={answer => this.submitAnswer(answer)}
                      isAnswered={isAnsweredOrIsAdmin}
                    />;
        } else if (currentQuestionnaire.is_yes_or_no) {
          choices = <TrueFalse
                      currentQuestionnaire = {this.props.currentQuestionnaire}
                      submitAnswer={answer => this.submitAnswer(answer)}
                      isAnswered={isAnsweredOrIsAdmin}
                    />;
        } else if (currentQuestionnaire.is_identification || currentQuestionnaire.is_q_and_a) {
          choices = <Identification
                      currentQuestionnaire = {this.props.currentQuestionnaire}
                      submitAnswer={answer => this.submitAnswer(answer)}
                      isAnswered={isAnsweredOrIsAdmin}
                    />;
        } else if (currentQuestionnaire.is_select_letters) {
          choices = <SelectLetters
                      currentQuestionnaire = {this.props.currentQuestionnaire}
                      submitAnswer={answer => this.submitAnswer(answer)}
                      isAnswered={isAnsweredOrIsAdmin}
                    />;
        } else if (currentQuestionnaire.is_poll) {
          choices = <Poll
                      currentQuestionnaire = {this.props.currentQuestionnaire}
                      submitAnswer={answer => this.submitAnswer(answer)}
                      isAnswered={isAnsweredOrIsAdmin}
                    />;
        }
      }
    } else {
      return null;
    }

    return (
      <div className="question-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="question w-100 text-center">{this.props.currentQuestionnaire.question}</div>
            <div className="choices">
              {choices}
            </div>
            <div className="answer">
              {correctAnswer}
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
