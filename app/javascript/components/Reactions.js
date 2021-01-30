import React from "react"
import PropTypes from "prop-types"
import Like from "images/active-like.png";
import Heart from "images/active-heart.png";
import Laugh from "images/active-laugh.png";
import Wow from "images/active-wow.png";
import Sad from "images/active-sad.png";
import Angry from "images/active-angry.png";
import Default from "images/default-icon.png";

class Reactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: this.props.eventId,
      currentUserId: this.props.currentUserId,
      activeLike: false,
      activeHeart: false,
      activeHappy: false,
      activeWow: false,
      activeSad: false,
      activeAngry: false
    };
    this.setLikeIcon = this.setLikeIcon.bind(this);
    this.setLoveIcon = this.setLoveIcon.bind(this);
    this.setHahaIcon = this.setHahaIcon.bind(this);
    this.setWowIcon = this.setWowIcon.bind(this);
    this.setSadIcon = this.setSadIcon.bind(this);
    this.setAngryIcon = this.setAngryIcon.bind(this);
    //this.createReaction = this.createReaction.bind(this);
    this.destroyReaction = this.destroyReaction.bind(this);
  }

  setLikeIcon = () => {
    this.setState({
      activeLike: !this.state.activeLike,
    })
    var image = document.getElementById("activeEmoji");
    image.src = (this.state.activeLike) ? (Like) : (Default);

    if(this.state.activeHeart){
      createReaction(1, this.state.currentUserId, this.state.eventId)
    }else{
      image.src = Default;
    }


  }

  setLoveIcon = () => {
    this.setState({
      activeHeart: !this.state.activeHeart,
    })
    var image = document.getElementById("activeEmoji");
    // if(this.state.activeHeart){
    //   image.src = Heart;
    // }else{
    //   image.src = Default;
    // }
    image.src = (this.state.activeHeart) ? (Heart) : (Default);
  }

  setHahaIcon = () => {
    this.setState({
      activeHappy: !this.state.activeHappy,
    })
    var image = document.getElementById("activeEmoji");
    image.src = (this.state.activeHappy) ? (Laugh) : (Default);
  }

  setWowIcon = () => {
    this.setState({
      activeSad: !this.state.activeSad,
    })
    var image = document.getElementById("activeEmoji");
    image.src = (this.state.activeSad) ? (Wow) : (Default);
  }

  setSadIcon = () => {
    this.setState({
      activeWow: !this.state.activeWow,
    })
    var image = document.getElementById("activeEmoji");
    image.src = (this.state.activeWow) ? (Sad) : (Default);
  }

  setAngryIcon = () => {
    this.setState({
      activeAngry: !this.state.activeAngry,
    })
    var image = document.getElementById("activeEmoji");
    image.src = (this.state.activeAngry) ? (Angry) : (Default);
  }



  destroyReaction() {

  }

  render () {
    return (
      <React.Fragment>
        <div className="feed">
          <a className="like-btn">
            <img src={Default} alt="emoji" className="active-emoji" id="activeEmoji"/>
            <div className="reaction-box">
                <div className="reaction-icon" onClick={this.setLikeIcon}>
                  <img src={Like} alt="like"/><label>Like</label>
                </div>
                <div className="reaction-icon" onClick={this.setLoveIcon}>
                  <img src={Heart} alt="Love"/><label>Love</label>
                </div>
                <div className="reaction-icon" onClick={this.setHahaIcon}>
                  <img src={Laugh} alt="Haha"/><label>Haha</label>
                </div>
                <div className="reaction-icon" onClick={this.setWowIcon}>
                  <img src={Wow} alt="Wow"/><label>Wow</label>
                </div>
                <div className="reaction-icon" onClick={this.setSadIcon}>
                  <img src={Sad} alt="Sad"/><label>Sad</label>
                </div>
                <div className="reaction-icon" onClick={this.setAngryIcon}>
                  <img src={Angry} alt="Angry"/><label>Angry</label>
                </div>
            </div>
          </a>
        </div>
        {this.state.eventId}
        {this.state.currentUserId}
      </React.Fragment>
    );
  }
}

Reactions.propTypes = {
  eventId: PropTypes.number.isRequired,
  currentUserId: PropTypes.number.isRequired,
};

function createReaction(emotion, userId, eventId) {
  const url = "/api/v1/reactions";
  const body = {
    reaction: {
      emotion: emotion,
      responder_id: userId,
      responder_type: "User",
      event_id: eventId
    }
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    console.log(response)
    throw new Error(response);
  }).catch(error => console.log(error.message));

}

export default Reactions
