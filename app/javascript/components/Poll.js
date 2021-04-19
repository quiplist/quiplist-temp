import React  from 'react';
import PropTypes from "prop-types";

class Poll extends React.Component {

  render() {

    return (
      <div className="choices--poll">
        <form>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-2">
               <div className="form-check px-0">
                 <input type="radio" id="poll1" name="poll" value="poll1"/>
                 <label htmlFor="poll1">Poll 1</label>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="poll2" name="poll" value="poll2"/>
                <label htmlFor="poll2">Poll 2</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="poll3" name="poll" value="poll3"/>
                <label htmlFor="poll3">Poll 3</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="poll4" name="poll" value="poll4" />
                <label htmlFor="poll4">Poll 4</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default Poll
