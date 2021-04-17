import PropTypes from "prop-types"
import ActionCable from 'actioncable';
import AnnouncementInput from './AnnouncementInput'
import Announcement from './Announcement'
import QuestionInput from './QuestionInput'
import Raffle from './Raffle'
import PlayPausePagination from './PlayPausePagination'
import React from 'react'
import ReactDOM from 'react-dom'
class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRaffle: [],
      currentRafflePage: null,
      totalRafflePages: null
    };
  }


  onRafflePageChanged = data => {
    const raffles = this.props.raffles;
    const currentRafflePage = data.currentPage
    const totalRafflePages = data.totalPages;
    const rafflePageLimit = data.pageLimit;
    const offset = (currentRafflePage - 1) * rafflePageLimit;
    const currentRaffle = raffles.slice(offset, offset + rafflePageLimit);
    this.setState({ currentRafflePage, currentRaffle, totalRafflePages });
  };



  render () {
    const totalRaffles = this.props.raffles.length;
    if (totalRaffles === 0) return null;

    return (
      <React.Fragment>
        <div className="row my-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="raffle-wrapper">
              <fieldset>
              <legend>Raffle</legend>
                {this.state.currentRaffle.map((raffle, index) =>
                  <p key={index}>{raffle.raffle_type_name}: {raffle.prize}</p>
                )}
                <PlayPausePagination
                  modelName={"raffles"}
                  totalRecords={totalRaffles}
                  pageLimit={1}
                  pageNeighbours={1}
                  currentData={this.state.currentRaffle}
                  currentEvent={this.props.currentEvent}
                  onPageChanged={this.onRafflePageChanged}
                />
              </fieldset>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="action-wrapper">
              <fieldset>
                <legend>Questionnaire</legend>
                <p className="my-0">Question:</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
                <QuestionInput/>
              </fieldset>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="action-wrapper">
              <fieldset>
                <legend>Announcement</legend>
                <p>Input message here: </p>
                <AnnouncementInput
                currentEvent = {this.props.currentEvent}
                currentUser = {this.props.currentUser}
                announcementCable = {this.props.announcementCable}
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
