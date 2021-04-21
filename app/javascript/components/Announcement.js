import React  from 'react';
import PropTypes from "prop-types";

class Announcement extends React.Component {

  announcement = () => {
    let announcement = {};

    if(this.props.currentAnnouncement !== undefined) {
      announcement = this.props.currentAnnouncement;
    }

    return announcement;
  }

  render() {
    const totalAnnoucements = this.props.announcements.length;
    if (totalAnnoucements === 0) return null;
    let announcement = this.announcement();
    let display;
    console.log(announcement)
    if (announcement.display_annoucement) {
      display = <marquee>{announcement.message}</marquee>;
    }

    return (
      <div className="announcement">
        <div className="row">
          <div className="col-12">
            {display}
          </div>
        </div>
      </div>
    )
  }
}

export default Announcement
