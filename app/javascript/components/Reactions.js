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
      activeLike: this.props.like,
      activeHeart: this.props.heart,
      activeHappy: this.props.happy,
      activeWow: this.props.wow,
      activeSad: this.props.sad,
      activeAngry: this.props.angry,
      like: 1,
      heart: 2,
      happy: 3,
      wow: 4,
      sad: 5,
      angry: 6
    };
    this.setLikeIcon = this.setLikeIcon.bind(this);
    this.setLoveIcon = this.setLoveIcon.bind(this);
    this.setHahaIcon = this.setHahaIcon.bind(this);
    this.setWowIcon = this.setWowIcon.bind(this);
    this.setSadIcon = this.setSadIcon.bind(this);
    this.setAngryIcon = this.setAngryIcon.bind(this);
  }

  componentDidMount() {
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    if (this.state.activeLike){
      image.src = Like;
      label.innerHTML = "Like";
    } else if (this.state.activeHeart) {
      image.src = Heart;
      label.innerHTML = "Heart";
    } else if (this.state.activeHappy) {
      image.src = Happy;
      label.innerHTML = "Happy";
    } else if (this.state.activeSad) {
      image.src = Sad;
      label.innerHTML = "Sad";
    } else if (this.state.activeWow) {
      image.src = Wow;
      label.innerHTML = "Wow";
    } else if (this.state.activeAngry) {
      image.src = Angry;
      label.innerHTML = "Angry";
    } else {
      image.src = Default;
      //label.innerHTML = this.state.activeLabel;
      label.innerHTML = "Like";
    }
  }

  setLikeIcon = () => {
    this.setState({
      activeLike: !this.state.activeLike,
    })
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    image.src = (this.state.activeLike) ? (Like) : (Default);
    label.innerHTML = (this.state.activeLike) ? "Like" : "Like";

    if (this.state.activeLike) {
      createReaction(this.state.like, this.props.currentUserId, this.props.eventId)
    } else {
      destroyReaction(this.props.currentUserId, this.props.eventId)
    }
  }

  setLoveIcon = () => {
    this.setState({
      activeHeart: !this.state.activeHeart,
    })
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    image.src = (this.state.activeHeart) ? (Heart) : (Default);
    label.innerHTML = (this.state.activeHeart) ? "Heart" : "Like";

    if (this.state.activeHeart) {
      createReaction(this.state.heart, this.props.currentUserId, this.props.eventId)
    } else {
      destroyReaction(this.props.currentUserId, this.props.eventId)
    }
  }

  setHahaIcon = () => {
    this.setState({
      activeHappy: !this.state.activeHappy,
    })
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    image.src = (this.state.activeHappy) ? (Laugh) : (Default);
    label.innerHTML = (this.state.activeHappy) ? "Haha" : "Like";

    if (this.state.activeHappy) {
      createReaction(this.state.happy, this.props.currentUserId, this.props.eventId)
    } else {
      destroyReaction(this.props.currentUserId, this.props.eventId)
    }
  }

  setWowIcon = () => {
    this.setState({
      activeWow: !this.state.activeWow,
    })
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    image.src = (this.state.activeWow) ? (Wow) : (Default);
    label.innerHTML = (this.state.activeWow) ? "Wow" : "Like";

    if (this.state.activeWow) {
      createReaction(this.state.wow, this.props.currentUserId, this.props.eventId)
    } else {
      destroyReaction(this.props.currentUserId, this.props.eventId)
    }
  }

  setSadIcon = () => {
    this.setState({
      activeSad: !this.state.activeSad,
    })
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    image.src = (this.state.activeSad) ? (Sad) : (Default);
    label.innerHTML = (this.state.activeSad) ? "Sad" : "Like";

    if (this.state.activeSad) {
      createReaction(this.state.sad, this.props.currentUserId, this.props.eventId)
    } else {
      destroyReaction(this.props.currentUserId, this.props.eventId)
    }
  }

  setAngryIcon = () => {
    this.setState({
      activeAngry: !this.state.activeAngry,
    })
    var image = document.getElementById("activeEmoji");
    var label = document.getElementById("activeLabel");
    image.src = (this.state.activeAngry) ? (Angry) : (Default);
    label.innerHTML = (this.state.activeAngry) ? "Angry" : "Like";

    if (this.state.activeAngry) {
      createReaction(this.state.angry, this.props.currentUserId, this.props.eventId)
    } else {
      destroyReaction(this.props.currentUserId, this.props.eventId)
    }
  }



  destroyReaction() {

  }

  render () {
    return (
      <React.Fragment>
        <div className="feed">
          <a className="like-btn">
            <img src={Default} alt="emoji" className="active-emoji" id="activeEmoji"/>
            <h2 id="activeLabel"></h2>
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
      </React.Fragment>
    );
  }
}

Reactions.propTypes = {
  eventId: PropTypes.number.isRequired,
  currentUserId: PropTypes.number.isRequired,
  like: PropTypes.bool.isRequired,
  heart: PropTypes.bool.isRequired,
  happy: PropTypes.bool.isRequired,
  sad: PropTypes.bool.isRequired,
  wow: PropTypes.bool.isRequired,
  angry: PropTypes.bool.isRequired,
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

function destroyReaction(userId, eventId) {
  const url = "/api/v1/reactions";
  const body = {
    reaction: {
      responder_id: userId,
      responder_type: "User",
      event_id: eventId
    }
  };

  fetch(url, {
    method: "DELETE",
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
