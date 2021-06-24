import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AnnouncementInput extends Component {

  state = {
    message: '',
  }

  onMouseOver = event => {
    const el = event.target;
    el.style.background = this.props.currentEvent.mouseOver;
  };

  onMouseOut = event => {
    const el = event.target;
    el.style.background = this.props.currentEvent.main_mouse_out;
  };

  submitAnnouncement = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const url = `/api/v1/announcements?event_id=${this.props.currentEvent.id}`;
    const body = {
      announcement: {
        admin_id: this.props.currentUser.id,
        message: messageString,
        event_id: this.props.currentEvent.id
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
      this.props.announcementCable.send({result})
    })
  }

  displayAnnouncement = () => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    if (this.props.currentAnnouncement === null) return false;
    const url = `/api/v1/announcements/${this.props.currentAnnouncement.id}?event_id=${this.props.currentEvent.id}`;
    const body = {
      announcement: {
        admin_id: this.props.currentUser.id,
        display_annoucement: false,
        event_id: this.props.currentEvent.id
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
      this.props.announcementCable.send({result})
    })
  }


  render() {
    return (
      <div className="menti-wrapper menti-controllers announcement__field">
        <form
          action="."
          onSubmit={e => {
            e.preventDefault()
            this.submitAnnouncement(this.state.message)
            this.setState({ message: '' })
          }}>
          <div className="announcement-input chat-input">
            <input
              type="text"
              value={this.state.message}
              placeholder="Enter announcement..."
              onChange={e => this.setState({ message: e.target.value })}
               />
            <input
              type="submit" value={'Send'}
              style={{ background : this.props.currentEvent.main_mouse_out, border : '1px solid' + this.props.currentEvent.main_mouse_out }}
              onMouseEnter={event => this.onMouseOver(event)}
              onMouseOut={event => this.onMouseOut(event)} />
          </div>
        </form>
        <form
          action="."
          onSubmit={e => {
            e.preventDefault()
            this.displayAnnouncement()
          }}>
          <div className="announcement-input chat-input justify-content-end py-0">
            <input
              type="submit" value={'Remove'}
              style={{ background : '#eb1e23', border : '1px solid' + '#eb1e23' }}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default AnnouncementInput
