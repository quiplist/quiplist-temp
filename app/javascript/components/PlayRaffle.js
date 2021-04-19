import React  from 'react';
import PropTypes from "prop-types";

class PlayRaffle extends React.Component {

  render() {
    return (
      <a
        target="_blank"
        className=""
        href={this.props.playUrl}
      >
      <i className="fas fa-play mx-1"></i>
      </a>
    )
  }
}


export default PlayRaffle
