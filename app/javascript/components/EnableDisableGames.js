import React  from 'react';
import PropTypes from "prop-types";

class EnableDisableGames extends React.Component {

  render() {
    let icon;

    if (this.props.currentEvent.disable_expo_games) {
      icon = <i className="fas fa-toggle-off mx-1"></i>
    } else {
      icon = <i className="fas fa-toggle-on mx-1"></i>
    }

    return (
      <form
        action="."
        className="questionnaire--actions"
        onSubmit={e => {
          e.preventDefault()
          this.props.enableDisableGames(this.props.currentEvent)
        }}>
        <input type="submit" value=""/>
        {icon}
      </form>
    )
  }
}


export default EnableDisableGames
