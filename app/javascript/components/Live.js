import React  from 'react';
import PropTypes from "prop-types";
import FacebookLive from "./_shared/FacebookLive";
import YoutubeLive from "./_shared/YoutubeLive";
import None from "./_shared/None";
import Chat from "./Chat";
import Reactions from "./Reactions";


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
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
            {video}
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <div className="row">
            <div className="col-12">

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
              />
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
};

export default Live
