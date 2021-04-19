import React  from 'react';
import PropTypes from "prop-types";

class MultipleChoice extends React.Component {

  render() {

    return (
      <div className="choices--multiple">
        <form>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-2">
               <div className="form-check px-0">
                  <input type="radio" id="loremIpsum1" name="loremIpsum" value="loremIpsum1"/>
                  <label htmlFor="loremIpsum1">Lorem 1</label>
               </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="loremIpsum2" name="loremIpsum" value="loremIpsum2"/>
                <label htmlFor="loremIpsum2">Lorem 2</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="loremIpsum3" name="loremIpsum" value="loremIpsum3"/>
                <label htmlFor="loremIpsum3">Lorem 3</label>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-2">
              <div className="form-check px-0">
                <input type="radio" id="loremIpsum4" name="loremIpsum" value="loremIpsum4" />
                <label htmlFor="loremIpsum4">Lorem 4</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default MultipleChoice
