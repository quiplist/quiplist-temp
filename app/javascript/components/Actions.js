import PropTypes from "prop-types"
import ActionCable from 'actioncable';
import AnnouncementInput from './AnnouncementInput'
import Announcement from './Announcement'
import QuestionInput from './QuestionInput'
import Raffle from './Raffle'
import React from 'react'
import ReactDOM from 'react-dom'
class Actions extends React.Component {


  render () {
    return (
      <React.Fragment>
        <div className="row my-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="raffle-wrapper">
              <fieldset>
                <legend>Raffle</legend>
                <p>Raffle Name: Sample Raffle</p>
                <p>Raffle Prize: Sample Raffle</p>
                <Raffle/>
              </fieldset>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="action-wrapper">
              <fieldset>
                <legend>Questionnaire</legend>
                <p className="my-0">Question:</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
                <QuestionInput/>
              </fieldset>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="action-wrapper">
              <fieldset>
                <legend>Announcement</legend>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
                <AnnouncementInput/>
              </fieldset>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Actions.propTypes = {
  eventId: PropTypes.number.isRequired
};

export default Actions
