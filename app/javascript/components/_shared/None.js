import React  from 'react';
import PropTypes from "prop-types";

class None extends React.Component {

  render() {

    return (
      <div class="no-video-wrapper">
        <p>This event will start soon.</p>
      </div>
    )
  }
}

None.propTypes = {
  url: PropTypes.string.isRequired
};

export default None
