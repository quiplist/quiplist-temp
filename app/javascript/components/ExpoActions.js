import React  from 'react';
import Announcement from "./Announcement";
import ExpoControllers from "./ExpoControllers";
import ActionCable from 'actioncable';

class ExpoActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      url: this.props.url,
      eventId: this.props.eventId,
      currentUserId: this.props.currentUserId,
     
      currentEvent: {},
      announcements: [],
      currentAnnouncement: {},
      currentUser: {},
     
      questionnaires: [],
      currentQuestionnaire: {},
      isAnsweredQuestionnaire: false
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
      this.setState({ questionnaires: result.questionnaires })
      if(this.state.questionnaires.length > 0) {
        this.setQuestionnaire(result.questionnaires[0])
        console.log(this.state.currentQuestionnaire)
        if (this.state.currentQuestionnaire.answered_correctly.length > 0) {
          let isAnswered = this.state.currentQuestionnaire.answered_correctly.some(answer => answer.user_id === this.state.currentUser.id)
          this.setIsAnsweredQuestionnaire(isAnswered)
        }
      }
    });


    const fetchAnnouncementUrl = `/api/v1/announcements?event_id=${this.props.eventId}`;
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
          this.addChat(data.result)
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

    this.questionnairesChannel = this.cable.subscriptions.create(
      {
        channel: `QuestionnairesChannel`,
        id: this.props.eventId
      },{
        connected: () => {
          console.log("Questionnaire Channel connected!")
        },
        disconnected: () => {},
        received: data => {
          this.setQuestionnaire(data.result)
          console.log("cable1")
          console.log(data.result)
          console.log("cable1")
          if (data.result !== undefined) {
            if (data.result.answered_correctly.length > 0) {
              let isAnswered = data.result.answered_correctly.some(answer => answer.user_id === this.state.currentUser.id)
              this.setIsAnsweredQuestionnaire(isAnswered)
            } else {
              this.setIsAnsweredQuestionnaire(false)
            }
          }
        }
      });
  }

  updateAnnouncement = announcement => {
    this.setState(state => ({ currentAnnouncement: announcement }))
  }

  addAnnoucement = announcement => {
    this.setState(state => ({ announcements: [...state.announcements, announcement] }))
  }

  setQuestionnaire = questionnaire => {
    this.setState(state => ({ currentQuestionnaire: questionnaire }))
  }

  setIsAnsweredQuestionnaire = (isAnswered) => {
    this.setState(state => ({ isAnsweredQuestionnaire: isAnswered}))
  }

  render() {
   
    let actions;
    
    actions = <ExpoControllers
        //raffles = {this.state.raffles}
        questionnaires = {this.state.questionnaires}
        //guestLists = {this.state.guestLists}
        currentUser = {this.state.currentUser}
        currentEvent = {this.state.currentEvent}
        currentQuestionnaire = {this.state.currentQuestionnaire}
        announcementCable = {this.announcementsChannel}
        currentAnnouncement = {this.state.currentAnnouncement}
        updateAnnouncement = {announcement => this.updateAnnouncement(announcement)}
        questionnaireCable = {this.questionnairesChannel}
        setQuestionnaire = {questionnaire => this.setQuestionnaire(questionnaire)}
        setIsAnsweredQuestionnaire = {isAnswered => this.setIsAnsweredQuestionnaire(isAnswered)} />
    

    return (
      <div>
        {actions}
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
              <Announcement
              announcements = {this.state.announcements}
              currentAnnouncement = {this.state.currentAnnouncement} />
          </div>
        </div>
      </div>
    )
  }
}

export default ExpoActions
