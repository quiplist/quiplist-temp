import React  from 'react';
import PropTypes from "prop-types";

class Announcement extends React.Component {

  render() {

    return (
      <div className="announcement">
        <div className="row">
          <div className="col-12">
            <marquee>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</marquee>
          </div>
        </div>
      </div>
    )
  }
}

// Announcement.propTypes = {

// };

export default Announcement
