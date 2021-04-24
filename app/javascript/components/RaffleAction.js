import React  from 'react';
import PropTypes from "prop-types";
import PlayPausePagination from "./PlayPausePagination";

class RaffleAction extends React.Component {

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <div className="action-wrapper">
          <fieldset>
          <legend>Raffle</legend>
            <div className="row h-100">
              <div className="col-sm-12 col-md-6 has-border-fh">
                <div className="menti-wrapper">
                  {this.props.currentRaffle.map((raffle, index) =>
                    <p key={index}>{raffle.raffle_type_name}: {raffle.prize}</p>
                  )}
                  <PlayPausePagination
                    modelName={"raffles"}
                    totalRecords={this.props.totalRaffles}
                    pageLimit={1}
                    pageNeighbours={1}
                    currentData={this.props.currentRaffle}
                    currentEvent={this.props.currentEvent}
                    onPageChanged={this.props.onRafflePageChanged}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <p className="mb-3"><b>Winner:</b></p>
                {this.props.currentRaffle.map((raffle, index) =>
                  <p key={index}>{raffle.won} </p>
                )}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    )
  }
}


export default RaffleAction
