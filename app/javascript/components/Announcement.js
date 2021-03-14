import React  from 'react';
import PropTypes from "prop-types";

class Announcement extends React.Component {

  render() {

    return (
      <div className="announcement">
        <div className="row">
          <div className="col-12">
            <marquee>Announcement: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, s
            ed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,</marquee>
          </div>
        </div>
      </div>
    )
  }
}

// Announcement.propTypes = {

// };

export default Announcement
