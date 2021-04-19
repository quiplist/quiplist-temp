import React  from 'react';
import PropTypes from "prop-types";

class PlayQuestionnaire extends React.Component {

  render() {
    if (this.props.currentData.length === 0) return null;

    let icon;
    if (this.props.currentData[0].status === 1) {
      icon = <i className="fas fa-pause mx-1"></i>
    } else {
      icon = <i className="fas fa-play mx-1"></i>
    }
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.playQuestionnaire(this.props.currentData[0])
        }}>
        <input type="submit" />
        {icon}
      </form>
    )
  }
}


export default PlayQuestionnaire
