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
    this.state={
      isAnswered: false
    }
  }

  submitAnswer = answer => {
    console.log("answer")
    console.log(answer)
    console.log("answer")
    this.setState(state => ({ isAnswered: true }))
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    // const url = "/api/v1/chats";
    // const body = {
    //   chat: {
    //     sender_id: this.props.currentUser.id,
    //     sender_type: this.props.currentUser.user_type,
    //     message: messageString,
    //     event_id: this.props.currentEvent.id
    //   }
    // }
    //
    //
    //
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //     },
    //     body: JSON.stringify(body)
    // })
    // .then(resp => resp.json())
    // .then(result => {
    //   //this.addChat(result)
    //   this.props.chatCable.send({result})
    // })

  }

  render() {
    const { currentQuestionnaire, questionnaires } = this.props;
    if (currentQuestionnaire === undefined || questionnaires === undefined) return null;
    const totalQuestionnaires = questionnaires.length;

    if (totalQuestionnaires === 0) return null;


    const isQueued = currentQuestionnaire.is_queued;
    const isOngoing = currentQuestionnaire.is_ongoing;
    const isDone = currentQuestionnaire.is_done;
    if (isQueued) return null;
    let choices;
    let correctAnswer;

    if (isDone) {
      correctAnswer = <CorrectAnswer
                        currentQuestionnaire = {this.props.currentQuestionnaire}
                      />
    } else if (isOngoing) {
      if (currentQuestionnaire.is_multiple_choice) {
        choices = <MultipleChoice
                    currentQuestionnaire = {this.props.currentQuestionnaire}
                    submitAnswer={answer => this.submitAnswer(answer)}
                    isAnswered={this.state.isAnswered}
                  />;
      } else if (currentQuestionnaire.is_yes_or_no) {
        choices = <TrueFalse
                    currentQuestionnaire = {this.props.currentQuestionnaire}
                    submitAnswer={answer => this.submitAnswer(answer)}
                    isAnswered={this.state.isAnswered}
                  />;
      } else if (currentQuestionnaire.is_identification || currentQuestionnaire.is_q_and_a) {
        choices = <Identification
                    currentQuestionnaire = {this.props.currentQuestionnaire}
                    submitAnswer={answer => this.submitAnswer(answer)}
                    isAnswered={this.state.isAnswered}
                  />;
      } else if (currentQuestionnaire.is_select_letters) {
        choices = <SelectLetters
                    currentQuestionnaire = {this.props.currentQuestionnaire}
                    submitAnswer={answer => this.submitAnswer(answer)}
                    isAnswered={this.state.isAnswered}
                  />;
      } else if (currentQuestionnaire.is_poll) {
        choices = <Poll
                    currentQuestionnaire = {this.props.currentQuestionnaire}
                    submitAnswer={answer => this.submitAnswer(answer)}
                    isAnswered={this.state.isAnswered}
                  />;
      }
    }
    return (
      <div className="question-wrapper">
        <div className="row">
          <div className="col-12">
            <span className="question">{this.props.currentQuestionnaire.question}</span>
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
