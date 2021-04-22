import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayQuestionnaire from "./PlayQuestionnaire";
import DoneQuestionnaire from "./DoneQuestionnaire";
import PlayRaffle from "./PlayRaffle";

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
    if (this.props.modelName === "questionnaires") {
      if (this.props.currentData.answered_correctly.length > 0) {
        let isAnswered = this.props.currentData.answered_correctly.some(answer => answer.user_id === this.props.currentUser.id)
        this.props.setIsAnsweredQuestionnaire(isAnswered)
      }
      this.props.resetDisplayQuestionnaire(this.props.currentData)
    }
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - 1);
  };

  handleMoveRight = evt => {
    if (this.props.modelName === "questionnaires") {
      //this.props.setIsAnsweredQuestionnaire(false)
      if (this.props.currentData.answered_correctly.length > 0) {
        let isAnswered = this.props.currentData.answered_correctly.some(answer => answer.user_id === this.props.currentUser.id)
        console.log("pagination")
        console.log(this.props.currentData)
        console.log(isAnswered)
        console.log("pagination")
        this.props.setIsAnsweredQuestionnaire(isAnswered)
      }
      this.props.resetDisplayQuestionnaire(this.props.currentData)
    }
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + 1);
  };

  render() {
    const { currentPage } = this.state;
    let playButton;
    let doneButton;
    if (!this.totalRecords) return null;

    if (this.totalPages === 0) return null;

    if (this.props.modelName === "questionnaires") {
      playButton = <PlayQuestionnaire
                    currentData = {this.props.currentData}
                    playQuestionnaire = {questionnaire => this.props.playQuestionnaire(questionnaire)}
                  />
      doneButton = <DoneQuestionnaire
                    currentData = {this.props.currentData}
                    doneQuestionnaire = {questionnaire => this.props.doneQuestionnaire(questionnaire)}
                  />
    } else if ((this.props.modelName === "raffles") && (this.props.currentData.length !== 0)) {
      let playUrl = `/admins/events/${this.props.currentEvent.id}/raffles/${this.props.currentData[0].id}`
      playButton = <PlayRaffle
                    playUrl = {playUrl}
                  />
    }

    return (
      <div className="row text-end">
        <div className="col d-flex flex-wrap">
          <a
            className=""
            href="#"
            aria-label="Previous"
            onClick={this.handleMoveLeft}
          >
            <i className="fas fa-backward mx-1"></i>
          </a>
          {playButton}
          <a
            className=""
            href="#"
            aria-label="Next"
            onClick={this.handleMoveRight}
          >
            <i className="fas fa-forward mx-1"></i>
          </a>
          {doneButton}
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
