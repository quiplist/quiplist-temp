import React  from 'react';
import PropTypes from "prop-types";

class Identification extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let disabled = this.props.isAnswered;

    return (
      <div className="choices--identification">
        <form className="row align-items-center mt-2 mb-2"
          onSubmit={e => {
            e.preventDefault()
            this.props.submitAnswer(this.state.answer)
          }}>
          <div className="col-12 col-md-9">
            <div className="mb-0">
                <input type="text" id="answer" name="answer" className="form-control" placeholder="Answer..." onChange={this.onChange} disabled={disabled}/>
            </div>
          </div>

          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-blue" disabled={disabled}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Identification
