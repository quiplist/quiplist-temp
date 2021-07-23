import PropTypes from "prop-types"
import ActionCable from 'actioncable';
import AnnouncementInput from './AnnouncementInput'
import Announcement from './Announcement'
// import QuestionInput from './QuestionInput'
import Raffle from './Raffle'
import PlayPausePagination from './PlayPausePagination'
import RaffleAction from './RaffleAction'
// import QuestionnaireAction from './QuestionnaireAction'
import React from 'react'
import ReactDOM from 'react-dom'
class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRaffle: [],
      currentRafflePage: null,
      totalRafflePages: null,
      // currentQuestionnaire: this.props.currentQuestionnaire,
      // currentQuestionnairePage: null,
      // totalQuestionnairePages: null
    };
  }

  onQuestionnairePageChanged = data => {
    // const questionnaires = this.props.questionnaires;
    // const currentQuestionnairePage = data.currentPage
    const totalQuestionnairePages = data.totalPages;
    const questionnairePageLimit = data.pageLimit;
    // const offset = (currentQuestionnairePage - 1) * questionnairePageLimit;
    // const currentQuestionnaire = questionnaires[currentQuestionnairePage - 1]
    // this.props.setQuestionnaire(currentQuestionnaire)
    // this.setState({ currentQuestionnairePage, currentQuestionnaire, totalQuestionnairePages });
  };


  onRafflePageChanged = data => {
    const raffles = this.props.raffles;
    const currentRafflePage = data.currentPage
    const totalRafflePages = data.totalPages;
    const rafflePageLimit = data.pageLimit;
    // const offset = (currentRafflePage - 1) * rafflePageLimit;
    const currentRaffle = raffles.slice(offset, offset + rafflePageLimit);
    this.setState({ currentRafflePage, currentRaffle, totalRafflePages });
  };


  render () {
    const totalRaffles = this.props.raffles.length;
    // const totalQuestionnaires = this.props.questionnaires.length;
    let raffleAction;
    // let questionnaireAction;

    if (totalRaffles > 0) {
      raffleAction = <RaffleAction
                      currentRaffle = {this.state.currentRaffle}
                      totalRaffles = {totalRaffles}
                      currentEvent = {this.props.currentEvent}
                      onRafflePageChanged = {this.onRafflePageChanged}
                    />
    }

    return (
      <React.Fragment>
        <div className="row my-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="action-wrapper">
              <fieldset>
                <legend>Announcement</legend>
                <AnnouncementInput
                currentEvent = {this.props.currentEvent}
                currentUser = {this.props.currentUser}
                announcementCable = {this.props.announcementCable}
                currentAnnouncement = {this.props.currentAnnouncement}
                updateAnnouncement = {announcement => this.props.updateAnnouncement(announcement)}
                onExpo = {false} />
              </fieldset>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Actions
