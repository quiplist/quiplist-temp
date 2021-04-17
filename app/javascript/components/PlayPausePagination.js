import React, { Component } from "react";
import PropTypes from "prop-types";

class PlayPausePagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 1, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 1;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = page => {
    page = (page <= 0) ? 1 : page
    const { onPageChanged = f => f } = this.props;
    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - 1);
  };

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + 1);
  };

  render() {
    let playUrl = "";
    let isUrl = true;
    if (!this.totalRecords) return null;

    if (this.totalPages === 1) return null;

    const { currentPage } = this.state;

    if ((this.props.modelName === "raffles") && (this.props.currentData.length !== 0)) {
      playUrl = `/admins/events/${this.props.currentEvent.id}/raffles/${this.props.currentData[0].id}`
    } else if (this.props.modelName === "questionnaire") {

    }

    return (
      <div className="row text-end">
        <div className="col">
          <a
            className=""
            href="#"
            aria-label="Previous"
            onClick={this.handleMoveLeft}
          >
            <i className="fas fa-backward mx-1"></i>
          </a>
          <a
            target="_blank"
            className=""
            href={playUrl}
          >
          <i className="fas fa-play mx-1"></i>
          </a>
          <a
            className=""
            href="#"
            aria-label="Next"
            onClick={this.handleMoveRight}
          >
            <i className="fas fa-forward mx-1"></i>
          </a>
          <i className="fas fa-sync-alt mx-1"></i>
        </div>
      </div>
    );
  }
}

PlayPausePagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default PlayPausePagination;
