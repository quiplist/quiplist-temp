import React  from 'react';
import PropTypes from "prop-types";

class DoneQuestionnaire extends React.Component {

  render() {
    let icon;
    let isDone = (this.props.currentData.status === 2);
    if (isDone) {
      icon = <i className="fas fa-check-circle mx-1"></i>
    } else {
      icon = <i className="fas fa-check-circle-o mx-1"></i>
    }

    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.doneQuestionnaire(this.props.currentData)
        }}>
        {icon}
        <input type="submit" disabled={isDone} /> 
      </form>
    )
  }
}


export default DoneQuestionnaire
