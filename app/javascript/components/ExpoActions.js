import PropTypes from "prop-types"
import ActionCable from 'actioncable';
import AnnouncementInput from './AnnouncementInput'
import Announcement from './Announcement'
import EnableDisableGames from './EnableDisableGames'
import React from 'react'
import ReactDOM from 'react-dom'

class ExpoActions extends React.Component {
  constructor(props) {
    super(props);
  }

  enableDisableGames = (evnt) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const url = `/api/v1/events/${evnt.id}`;
    let enabled = (!evnt.disable_expo_games)

    const body = {
      event: {
        disable_expo_games: enabled
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
      console.log(result)
      this.props.eventCable.send({result})
      this.props.updateCurrentEvent(result)
    })
  }

  render () {

    return (
      <React.Fragment>
        <div className="row my-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="action-wrapper">
              <fieldset>
              <legend>Controls</legend>
                <div className="row h-100">
                  <div className="col-sm-12 col-md-6 has-border-fh">
                    <div className="menti-wrapper">
                    <div className="row text-end mt-3">
                      <div className="col d-flex flex-wrap justify-content-end">
                        Games
                        <EnableDisableGames
                          currentEvent = {this.props.currentEvent}
                          enableDisableGames = {evnt => this.enableDisableGames(evnt)}
                        />
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
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
