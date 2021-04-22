import React  from 'react';
import PropTypes from "prop-types";

class PlayQuestionnaire extends React.Component {

  render() {
    let icon;
    let disabledPlay = (this.props.currentData.status === 2);
    if (this.props.currentData.is_display) {
      icon = <i className="fas fa-pause mx-1"></i>
    } else {
      icon = <i className="fas fa-play mx-1"></i>
    }

    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.playQuestionnaire(this.props.currentData)
        }}>
        <input type="submit" />
        {icon}
      </form>
    )
  }
}


export default PlayQuestionnaire
