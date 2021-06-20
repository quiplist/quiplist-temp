import PropTypes from "prop-types"
import ActionCable from 'actioncable';
import AnnouncementInput from './AnnouncementInput'
import Announcement from './Announcement'
import QuestionInput from './QuestionInput'
import Raffle from './Raffle'
import PlayPausePagination from './PlayPausePagination'
import RaffleAction from './RaffleAction'
import QuestionnaireAction from './QuestionnaireAction'
import React from 'react'
import ReactDOM from 'react-dom'
class ExpoControllers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionnaire: this.props.currentQuestionnaire,
      currentQuestionnairePage: null,
      totalQuestionnairePages: null
    };
  }

  onQuestionnairePageChanged = data => {
    const questionnaires = this.props.questionnaires;
    const currentQuestionnairePage = data.currentPage
    const totalQuestionnairePages = data.totalPages;
    const questionnairePageLimit = data.pageLimit;
    const offset = (currentQuestionnairePage - 1) * questionnairePageLimit;
    const currentQuestionnaire = questionnaires[currentQuestionnairePage - 1]
    this.props.setQuestionnaire(currentQuestionnaire)
    this.setState({ currentQuestionnairePage, currentQuestionnaire, totalQuestionnairePages });
  };

  playQuestionnaire = (questionnaire) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const url = `/api/v1/questionnaires/${questionnaire.id}`;
    let isDisplay = (!questionnaire.is_display)
    let status = questionnaire.status;
    if (questionnaire.is_queued && isDisplay) {
      status = 1
    }
    const body = {
      questionnaire: {
        is_display: isDisplay,
        status: status
      }
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(result => {
      this.props.questionnaireCable.send({result})
      this.setState( {currentQuestionnaire: result })
    })
  }

  resetDisplayQuestionnaire = (questionnaire) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const url = `/api/v1/questionnaires/${questionnaire.id}`;
    let isDisplay = false;

    const body = {
      questionnaire: {
        is_display: isDisplay
      }
    }

    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(result => {
      this.props.questionnaireCable.send({result})
      // this.setState( {currentQuestionnaire: result })
    })
  }

  doneQuestionnaire = questionnaire => {
      let status = 0;
      // on submitting the ChatInput form, send the message, add it to the list and reset the input
      const url = `/api/v1/questionnaires/${questionnaire.id}`;
      switch(questionnaire.status) {
        case 0:
          status = 1;
          break;
        case 1:
          status = 2;
          break;
        case 2:
          status = 2;
          break
        default:
          status = 0;
      }

      const body = {
        questionnaire: {
          status: status
        }
      }

      fetch(url, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .then(result => {
        this.props.questionnaireCable.send({result})
        this.setState( {currentQuestionnaire: result })
      })
  }

  render () {
    const totalQuestionnaires = this.props.questionnaires.length;

    let questionnaireAction;


    if (totalQuestionnaires > 0) {
      questionnaireAction = <QuestionnaireAction
                      currentQuestionnaire = {this.state.currentQuestionnaire}
                      totalQuestionnaires = {totalQuestionnaires}
                      currentEvent = {this.props.currentEvent}
                      onQuestionnairePageChanged = {this.onQuestionnairePageChanged}
                      playQuestionnaire = {questionnaire => this.playQuestionnaire(questionnaire)}
                      doneQuestionnaire = {questionnaire => this.doneQuestionnaire(questionnaire)}
                      setIsAnsweredQuestionnaire = {isAnswered => this.props.setIsAnsweredQuestionnaire(isAnswered)}
                      resetDisplayQuestionnaire = {questionnaire => this.resetDisplayQuestionnaire(questionnaire)}
                      currentUser = {this.props.currentUser}
                    />
    }

    return (
      <React.Fragment>
        <div className="row my-3">
          {questionnaireAction}
        </div>
      </React.Fragment>
    );
  }
}

export default ExpoControllers
