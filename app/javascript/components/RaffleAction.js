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
          </fieldset>
        </div>
      </div>
    )
  }
}


export default RaffleAction
