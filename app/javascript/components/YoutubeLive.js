import React  from 'react';
import PropTypes from "prop-types";
// import Questions from "./Questions";

class YoutubeLive extends React.Component {

  render() {

    return (
      <div className="youtube-wrapper">
        <iframe
          width="100%"
          height="665"
          src={`https://www.youtube.com/embed/${this.props.url}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}

YoutubeLive.propTypes = {
  url: PropTypes.string
};

export default YoutubeLive
