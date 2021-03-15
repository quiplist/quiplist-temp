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
      like: this.props.like,
      heart: this.props.heart,
      happy: this.props.happy,
      sad: this.props.sad,
      wow: this.props.wow,
      angry: this.props.angry,
      dislike: this.props.dislike,
      clap: this.props.clap,
      eventDescription: this.props.eventDescription,
    };


  }


  render() {
    const isFB = this.state.isFB;
    const isYT = this.state.isYT;
    const isNone = this.state.isNoVideo;
    let video;

    if(isFB){
      video =  <FacebookLive url={this.state.url}/>;
    }else if(isYT) {
      video =  <YoutubeLive url={this.state.url}/>;
    }else{
      video = <None/>;
    }

    return (
      <div>
        <Actions eventId={this.state.eventId}/>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8">
              <Announcement />
              {video}
          </div>
          <div className="col-12 col-md-12 col-lg-4">
            <div className="row">
              <div className="col-12">
                <EventDescription
                eventDescription = {this.state.eventDescription}
                currentUserId = {this.state.currentUserId} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Chat eventId={this.state.eventId}/>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Reactions
                currentUserId= {this.state.currentUserId}
                eventId= {this.state.eventId}
                like= {this.state.like}
                heart= {this.state.heart}
                happy= {this.state.happy}
                sad= {this.state.sad}
                wow= {this.state.wow}
                angry= {this.state.angry}
                dislike= {this.state.dislike}
                clap= {this.state.clap}
                eventDescription = {this.state.eventDescription}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Live.propTypes = {
  fbVideo: PropTypes.bool.isRequired,
  ytVideo: PropTypes.bool.isRequired,
  noVideo: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  eventId: PropTypes.number.isRequired,
  currentUserId: PropTypes.number.isRequired,
  like: PropTypes.bool.isRequired,
  heart: PropTypes.bool.isRequired,
  happy: PropTypes.bool.isRequired,
  sad: PropTypes.bool.isRequired,
  wow: PropTypes.bool.isRequired,
  angry: PropTypes.bool.isRequired,
  dislike: PropTypes.bool.isRequired,
  clap: PropTypes.bool.isRequired,
  eventDescription: PropTypes.string.isRequired
};

export default Live
