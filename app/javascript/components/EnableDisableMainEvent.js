import React  from 'react';
import PropTypes from "prop-types";

class EnableDisableMainEvent extends React.Component {

  render() {
    let icon;

    if (this.props.currentEvent.disable_main_event) {
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
          this.props.enableDisableMainEvent(this.props.currentEvent)
        }}>
        <input type="submit" value=""/>
        {icon}
      </form>
    )
  }
}


export default EnableDisableMainEvent
