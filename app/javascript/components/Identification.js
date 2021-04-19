import React  from 'react';
import PropTypes from "prop-types";

class Identification extends React.Component {

  render() {

    return (
      <div className="choices--identification">
        <form className="row align-items-center mt-2">
          <div className="col-12 col-md-4 col-lg-8">
            <div className="mb-0">
                <input type="text" id="identification" className="form-control" placeholder="Answer..."/>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-4">
            <button type="submit" className="btn btn-blue w-100">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Identification
