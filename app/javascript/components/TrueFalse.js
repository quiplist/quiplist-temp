import React  from 'react';
import PropTypes from "prop-types";

class TrueFalse extends React.Component {

  render() {

    return (
      <div className="choices--true-false">
        <form>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-2">
               <div className="form-check px-0">
                  <input type="radio" id="true" name="trueFalse" value="true"/>
                  <label htmlFor="true">True</label>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="false" name="trueFalse" value="false"/>
                <label htmlFor="false">False</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default TrueFalse
