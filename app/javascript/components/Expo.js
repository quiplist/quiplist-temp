import React  from 'react';
import ExpoActions from "./ExpoActions";
import ExpoMap from "./ExpoMap";
import ActionCable from 'actioncable';
import AudioPlayer from "./AudioPlayer";

class Expo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: {},
      announcements: [],
      currentAnnouncement: {},
      currentUser: {},
      feedBacks: [],
      ratings: []
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
      this.setState({ feedBacks: result.feed_backs })
    });


    const fetchAnnouncementUrl = `/api/v1/announcements?event_id=${this.props.eventId}&on_expo=true`;
    fetch(fetchAnnouncementUrl)
    .then(response => response.json())
    .then(result => {
      this.setState({ currentAnnouncement: result })
    });

    const fetchRatingsUrl = `/api/v1/ratings?event_id=${this.props.eventId}&user_id=${this.props.userId}&is_admin=${this.props.isAdmin}`;
    fetch(fetchRatingsUrl)
    .then(response => response.json())
    .then(result => {
      this.setState({ ratings: result })
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

  announcement = () => {
    let announcement = {};
    if(this.state.currentAnnouncement !== undefined) {
      announcement = this.state.currentAnnouncement;
    }

    return announcement;
  }

  render() {
    const totalAnnoucements = this.state.announcements.length;
    if (totalAnnoucements === 0) return null;
    let announcement = this.announcement();
    let display;
    if (announcement.display_annoucement) {
      display = <marquee>{announcement.message}</marquee>;
    }

    const isAdmin = (this.state.currentUser.user_type === 'Admin')
    let actions;
    if (isAdmin) {
    }
    actions = <ExpoActions
      currentUser = {this.state.currentUser}
      currentEvent = {this.state.currentEvent}
      announcementCable = {this.announcementsChannel}
      currentAnnouncement = {this.state.currentAnnouncement}
      updateAnnouncement = {announcement => this.updateAnnouncement(announcement)}
      eventCable = {this.eventsChannel}
      updateCurrentEvent = {evnt => this.updateCurrentEvent(evnt)} />
    return (
      <div>
        <AudioPlayer currentEvent = {this.state.currentEvent} />
        {actions}
        <div className="row expomap">
          <div className="col px-0">
            {display}
            <ExpoMap
              currentEvent = {this.state.currentEvent}
              guestListId = {this.props.guestListId}
              isAdmin = {isAdmin}
              ratings = {this.state.ratings}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Expo
