import React, { Component } from 'react';

class ChatMessage extends Component {
  whichUser = () => {
    if ((this.props.chat.sender_id === parseInt(this.props.currentUser.id)) &&
        (this.props.chat.sender_type === this.props.currentUser.user_type)) {
      return 'current-user-message'
    } else {
      return 'other-user-message'
    }
  }

  render() {
      // when rendering the chat message, I need to first check whether the author of that message is my current user or not (by comparing ids)
      // if it is my current user, I will align the chat message div to the right of the page, and use a different color to differentiate their messages from the others' messages
    return (
      <div id="chat-message" className={this.whichUser()}>
        <h6>{this.props.chat.sender_name}</h6>
        <p>{this.props.chat.message}</p>
      </div>
    )
  }
}

export default ChatMessage
