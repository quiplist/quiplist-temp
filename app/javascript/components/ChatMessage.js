import React, { Component } from 'react';

class ChatMessage extends Component {
  whichUser = () => {
    let classNameValue = "";
    console.log(this.props.chat)
    if (this.props.chat === null) {
      return classNameValue;
    } else {
      if (this.props.chat.chat_type === 1) {
        classNameValue += 'reaction-message'
      } else {
        if ((this.props.chat.sender_type === 'Admin') &&
            (this.props.currentUser.user_type === 'Admin')) {
          classNameValue += ' current-admin-message'
        }else if (this.props.chat.sender_type === 'Admin'){
          classNameValue += ' current-admin-message'
        }

        if ((this.props.chat.sender_id === parseInt(this.props.currentUser.id)) &&
              (this.props.chat.sender_type === this.props.currentUser.user_type)) {
          classNameValue += ' current-user-message'
        } else {
          classNameValue += ' other-user-message'
        }
      }
    }


    return classNameValue;
  }

  render() {
      // when rendering the chat message, I need to first check whether the author of that message is my current user or not (by comparing ids)
      // if it is my current user, I will align the chat message div to the right of the page, and use a different color to differentiate their messages from the others' messages

    return (
      <div id="chat-message" className={this.whichUser()}>
        {this.props.chat.chat_type === 1 ? "" : <h6>{this.props.chat.sender_name}: </h6>}
        <p>{this.props.chat.message}</p>
      </div>
    )
  }
}

export default ChatMessage
