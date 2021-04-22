import React  from 'react';
import PropTypes from "prop-types";
import Questions from "./Questions";

class YoutubeLive extends React.Component {

  render() {

    return (
      <div className="youtube-wrapper">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${this.props.url}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <Questions
          questionnaires = {this.props.questionnaires}
          currentQuestionnaire = {this.props.currentQuestionnaire}
          isAnsweredQuestionnaire = {this.props.isAnsweredQuestionnaire}
          setIsAnsweredQuestionnaire = {isAnswered => this.props.setIsAnsweredQuestionnaire(isAnswered)}
        />
      </div>
    )
  }
}

YoutubeLive.propTypes = {
  url: PropTypes.string
};

export default YoutubeLive
