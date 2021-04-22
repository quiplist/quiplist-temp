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
class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRaffle: [],
      currentRafflePage: null,
      totalRafflePages: null,
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
    this.setState({ currentQuestionnairePage, currentQuestionnaire, totalQuestionnairePages });
    this.props.setQuestionnaire(currentQuestionnaire)
  };


  onRafflePageChanged = data => {
    const raffles = this.props.raffles;
    const currentRafflePage = data.currentPage
    const totalRafflePages = data.totalPages;
    const rafflePageLimit = data.pageLimit;
    const offset = (currentRafflePage - 1) * rafflePageLimit;
    const currentRaffle = raffles.slice(offset, offset + rafflePageLimit);
    this.setState({ currentRafflePage, currentRaffle, totalRafflePages });
  };

  playQuestionnaire = questionnaire => {
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
    const totalRaffles = this.props.raffles.length;
    const totalQuestionnaires = this.props.questionnaires.length;
    let raffleAction;
    let questionnaireAction;

    if (totalRaffles > 0) {
      raffleAction = <RaffleAction
                      currentRaffle = {this.state.currentRaffle}
                      totalRaffles = {totalRaffles}
                      currentEvent = {this.props.currentEvent}
                      onRafflePageChanged = {this.onRafflePageChanged}
                    />
    }
    if (totalQuestionnaires > 0) {
      questionnaireAction = <QuestionnaireAction
                      currentQuestionnaire = {this.state.currentQuestionnaire}
                      totalQuestionnaires = {totalQuestionnaires}
                      currentEvent = {this.props.currentEvent}
                      onQuestionnairePageChanged = {this.onQuestionnairePageChanged}
                      playQuestionnaire = {questionnaire => this.playQuestionnaire(questionnaire)}
                    />
    }

    return (
      <React.Fragment>
        <div className="row my-3">
          {raffleAction}
          {questionnaireAction}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="action-wrapper">
              <fieldset>
                <legend>Announcement</legend>
                <p>Input message here: </p>
                <AnnouncementInput
                currentEvent = {this.props.currentEvent}
                currentUser = {this.props.currentUser}
                announcementCable = {this.props.announcementCable}
                currentAnnouncement = {this.props.currentAnnouncement}
                updateAnnouncement = {announcement => this.props.updateAnnouncement(announcement)} />
              </fieldset>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Actions
