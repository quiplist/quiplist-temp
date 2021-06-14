import PropTypes from "prop-types"
import ActionCable from 'actioncable';
import AnnouncementInput from './AnnouncementInput'
import Announcement from './Announcement'
import React from 'react'
import ReactDOM from 'react-dom'

class ExpoActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
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
                onExpo = {true} />
              </fieldset>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExpoActions
