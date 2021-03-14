import React  from 'react';
import PropTypes from "prop-types";

class Questions extends React.Component {

  render() {

    return (
      <div className="question-wrapper">
        <div className="row">
          <div className="col-12">
            <span className="question">Announcement: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, s
            ed diam nonummy nibh euismod tincidunt ut laoreet Lorem ipsum dolor sit amet,</span>
            <div className="choices">
              <div className="choices--multiple ">
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
              <div className="choices--true-false d-none">
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
              <div className="choices--identification d-none">
                <form class="row align-items-center mt-2">
                  <div class="col-12 col-md-4 col-lg-8">
                    <div class="mb-0">
                        <input type="text" id="identification" className="form-control" placeholder="Answer..."/>
                    </div>
                  </div>

                  <div class="col-12 col-md-8 col-lg-4">
                    <button type="submit" className="btn btn-blue w-100">Submit</button>
                  </div>
                </form>
              </div>
              <div className="choices--poll">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Questions.propTypes = {

// };

export default Questions
