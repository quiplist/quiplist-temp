import React  from 'react';
import ExpoActions from "./ExpoActions";
import ExpoMap from "./ExpoMap";
import ActionCable from 'actioncable';

class Expo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: {},
      announcements: [],
      currentAnnouncement: {},
      currentUser: {},
    };
  }

  componentDidMount() {
    this.cable = ActionCable.createConsumer('/cable');
    fetch('/api/v1/fetch_current_user')
    .then(response => response.json())
    .then(result => {
      this.setState({ currentUser: result })
    });

    const fetchEventUrl = `/api/v1/events/${this.props.eventId}`;
    fetch(fetchEventUrl)
    .then(resp => resp.json())
    .then(result => {
      this.setState({ currentEvent: result })
      this.setState({ announcements: result.announcements })
    });


    const fetchAnnouncementUrl = `/api/v1/announcements?event_id=${this.props.eventId}&on_expo=true`;
    fetch(fetchAnnouncementUrl)
    .then(response => response.json())
    .then(result => {
      this.setState({ currentAnnouncement: result })
    });

    this.eventsChannel = this.cable.subscriptions.create(
      {
        channel: `EventsChannel`,
        id: this.props.eventId
      },{
        connected: () => {
          console.log("Events Channel connected!")
        },
        disconnected: () => {},
        received: data => {
          if (data.result !== undefined) {
            this.updateCurrentEvent(data.result)
          }
        }
      });

    this.announcementsChannel = this.cable.subscriptions.create(
      {
        channel: `AnnouncementsChannel`,
        id: this.props.eventId
      },{
        connected: () => {
          console.log("Accouncement Channel connected!")
        },
        disconnected: () => {},
        received: data => {
          this.updateAnnouncement(data.result)
          this.addAnnoucement(data.result)
        }
      });

  }

  updateAnnouncement = announcement => {
    this.setState(state => ({ currentAnnouncement: announcement }))
  }

  addAnnoucement = announcement => {
    this.setState(state => ({ announcements: [...state.announcements, announcement] }))
  }

  updateCurrentEvent = evnt => {
    this.setState(state => ({ currentEvent: evnt }))
  }

  render() {
    const isAdmin = (this.state.currentUser.user_type === 'Admin')
    let actions;
    if (isAdmin) {
      actions = <ExpoActions
        currentUser = {this.state.currentUser}
        currentEvent = {this.state.currentEvent}
        announcementCable = {this.announcementsChannel}
        currentAnnouncement = {this.state.currentAnnouncement}
        updateAnnouncement = {announcement => this.updateAnnouncement(announcement)}
        eventCable = {this.eventsChannel}
        updateCurrentEvent = {evnt => this.updateCurrentEvent(evnt)} />
    }
    return (
      <div>
        {actions}
        <div className="row expomap">
          <div className="col px-0">
            <marquee>Test</marquee>
            <ExpoMap />
          </div>
        </div>
      </div>
    )
  }
}

export default Expo
