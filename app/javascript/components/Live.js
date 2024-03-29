import React  from 'react';
import PropTypes from "prop-types";
import FacebookLive from "./FacebookLive";
import YoutubeLive from "./YoutubeLive";
import None from "./None";
import Chat from "./Chat";
import Reactions from "./Reactions";
import EventDescription from "./EventDescription";
import Announcement from "./Announcement";
import Actions from "./Actions";
import ActionCable from 'actioncable';

class Live extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFB: this.props.fbVideo,
      isYT: this.props.ytVideo,
      isNoVideo: this.props.noVideo,
      url: this.props.url,
      eventId: this.props.eventId,
      currentUserId: this.props.currentUserId,
      raffleId: this.props.raffleId,
      like: this.props.like,
      heart: this.props.heart,
      happy: this.props.happy,
      sad: this.props.sad,
      wow: this.props.wow,
      angry: this.props.angry,
      dislike: this.props.dislike,
      clap: this.props.clap,
      eventDescription: this.props.eventDescription,
      chats: [],
      currentEvent: {},
      announcements: [],
      currentAnnouncement: {},
      currentUser: {},
      raffles: [],
      guestLists: [],
      // questionnaires: [],
      // currentQuestionnaire: {},
      // isAnsweredQuestionnaire: false
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
      this.setState({ chats: result.chats })
      this.setState({ announcements: result.announcements })
      // this.setState({ raffles: result.raffles })
      // this.setState({ guestLists: result.guest_lists })
      // this.setState({ questionnaires: result.questionnaires })
      // if(this.state.questionnaires.length > 0) {
      //   this.setQuestionnaire(result.questionnaires[0])
      //   console.log(this.state.currentQuestionnaire)
      //   if (this.state.currentQuestionnaire.answered_correctly.length > 0) {
      //     let isAnswered = this.state.currentQuestionnaire.answered_correctly.some(answer => answer.user_id === this.state.currentUser.id)
      //     this.setIsAnsweredQuestionnaire(isAnswered)
      //   }
      // }
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

    // this.questionnairesChannel = this.cable.subscriptions.create(
    //   {
    //     channel: `QuestionnairesChannel`,
    //     id: this.props.eventId
    //   },{
    //     connected: () => {
    //       console.log("Questionnaire Channel connected!")
    //     },
    //     disconnected: () => {},
    //     received: data => {
    //       this.setQuestionnaire(data.result)
    //       console.log("cable1")
    //       console.log(data.result)
    //       console.log("cable1")
    //       if (data.result !== undefined) {
    //         if (data.result.answered_correctly.length > 0) {
    //           let isAnswered = data.result.answered_correctly.some(answer => answer.user_id === this.state.currentUser.id)
    //           this.setIsAnsweredQuestionnaire(isAnswered)
    //         } else {
    //           this.setIsAnsweredQuestionnaire(false)
    //         }
    //       }
    //     }
    //   });
  }

  addChat = chat => {
    this.setState(state => ({ chats: [...state.chats, chat] }))
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
    const isFB = this.state.isFB;
    const isYT = this.state.isYT;
    const isNone = this.state.isNoVideo;
    const isAdmin = (this.state.currentUser.user_type === 'Admin')
    let video;
    let actions;
    if(isFB){
      video = <FacebookLive
                url={this.state.url}
                //questionnaires = {this.state.questionnaires}
                //currentQuestionnaire = {this.state.currentQuestionnaire}
                //isAnsweredQuestionnaire = {this.state.isAnsweredQuestionnaire}
                //setIsAnsweredQuestionnaire = {isAnswered => this.setIsAnsweredQuestionnaire(isAnswered)}
                currentUser = {this.state.currentUser}
                isAdmin = {isAdmin}
              />;
    }else if(isYT) {
      video = <YoutubeLive
                url={this.state.url}
               // questionnaires = {this.state.questionnaires}
               // currentQuestionnaire = {this.state.currentQuestionnaire}
               // isAnsweredQuestionnaire = {this.state.isAnsweredQuestionnaire}
               // setIsAnsweredQuestionnaire = {isAnswered => this.setIsAnsweredQuestionnaire(isAnswered)}
                currentUser = {this.state.currentUser}
                isAdmin = {isAdmin}
              />;
    }else {
      video = <None
                //questionnaires = {this.state.questionnaires}
                //currentQuestionnaire = {this.state.currentQuestionnaire}
                //isAnsweredQuestionnaire = {this.state.isAnsweredQuestionnaire}
                //setIsAnsweredQuestionnaire = {isAnswered => this.setIsAnsweredQuestionnaire(isAnswered)}
                currentUser = {this.state.currentUser}
                isAdmin = {isAdmin}
              />;
    }
    if (isAdmin) {
      actions = <Actions
        // raffles = {this.state.raffles}
        //questionnaires = {this.state.questionnaires}
        // guestLists = {this.state.guestLists}
        currentUser = {this.state.currentUser}
        currentEvent = {this.state.currentEvent}
        //currentQuestionnaire = {this.state.currentQuestionnaire}
        announcementCable = {this.announcementsChannel}
        currentAnnouncement = {this.state.currentAnnouncement}
        updateAnnouncement = {announcement => this.updateAnnouncement(announcement)}
        //questionnaireCable = {this.questionnairesChannel}
        //setQuestionnaire = {questionnaire => this.setQuestionnaire(questionnaire)}
        //setIsAnsweredQuestionnaire = {isAnswered => this.setIsAnsweredQuestionnaire(isAnswered)} 
        />
    }

    return (
      <div>
        {actions}
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
              <Announcement
              announcements = {this.state.announcements}
              currentAnnouncement = {this.state.currentAnnouncement} />
              {video}
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="row">
              <div className="col-12">
                <EventDescription
                currentEvent = {this.state.currentEvent}
                raffleId = {this.state.raffleId}
                hasBrochure = {this.props.hasBrochure}
                isAdmin = {isAdmin} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Chat
                addChat={chat => this.addChat(chat)}
                chats={this.state.chats}
                currentEvent={this.state.currentEvent}
                currentUser = {this.state.currentUser}
                chatCable={this.eventsChannel}/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Reactions
                currentUser= {this.state.currentUser}
                currentEvent={this.state.currentEvent}
                like= {this.state.like}
                heart= {this.state.heart}
                happy= {this.state.happy}
                sad= {this.state.sad}
                wow= {this.state.wow}
                angry= {this.state.angry}
                dislike= {this.state.dislike}
                clap= {this.state.clap}
                countLike= {this.props.countLike}
                countDislike= {this.props.countDislike}
                countClap= {this.props.countClap}
                countLove= {this.props.countLove}
                countHaha= {this.props.countHaha}
                countWow= {this.props.countWow}
                countSad= {this.props.countSad}
                countAngry= {this.props.countAngry}
                chatCable={this.eventsChannel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Live.propTypes = {
//   fbVideo: PropTypes.bool.isRequired,
//   ytVideo: PropTypes.bool.isRequired,
//   noVideo: PropTypes.bool.isRequired,
//   url: PropTypes.string.isRequired,
//   eventId: PropTypes.number.isRequired,
//   currentUserId: PropTypes.number.isRequired,
//   like: PropTypes.bool.isRequired,
//   heart: PropTypes.bool.isRequired,
//   happy: PropTypes.bool.isRequired,
//   sad: PropTypes.bool.isRequired,
//   wow: PropTypes.bool.isRequired,
//   angry: PropTypes.bool.isRequired,
//   dislike: PropTypes.bool.isRequired,
//   clap: PropTypes.bool.isRequired,
//   eventDescription: PropTypes.string.isRequired,
//   raffleId: PropTypes.number.isRequired,
//   countLike: PropTypes.number.isRequired,
//   countDislike: PropTypes.number.isRequired,
//   countClap: PropTypes.number.isRequired,
//   countLove: PropTypes.number.isRequired,
//   countHaha: PropTypes.number.isRequired,
//   countWow: PropTypes.number.isRequired,
//   countSad: PropTypes.number.isRequired,
//   countAngry: PropTypes.number.isRequired
// };

export default Live
