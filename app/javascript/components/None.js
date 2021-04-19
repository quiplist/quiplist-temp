import React  from 'react';
import PropTypes from "prop-types";
import Questions from "./Questions";

class None extends React.Component {

  render() {
    console.log("none")
    console.log(this.props.currentQuestionnaire)
    console.log("none")
    return (
      <div className="no-video-wrapper">
        <p>This event will start soon.</p>
        <Questions
          questionnaires = {this.props.questionnaires}
          currentQuestionnaire = {this.props.currentQuestionnaire}
        />
      </div>
    )
  }
}


export default None
