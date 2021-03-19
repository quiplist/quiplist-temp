import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Raffle extends Component {

  render() {
    return (
      <form
        action=".">
        <div className="row text-end">
          <div className="col">
            <i className="fas fa-backward mx-1"></i>
            <i className="fas fa-play mx-1"></i>
            <i className="fas fa-forward mx-1"></i>
            <i className="fas fa-sync-alt mx-1"></i>
          </div>
        </div>
      </form>
    )
  }
}

export default Raffle
