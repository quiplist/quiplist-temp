import React  from 'react';
import PropTypes from "prop-types";
// import Questions from "./Questions";
class FacebookLive extends React.Component {

  componentDidMount() {
    const head = document.querySelector("body");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
    );
    head.appendChild(script);
  }

  render() {

    return (
      <div className="fb-wrapper">
        <div id="fb-root"></div>
        <div className="fb-video facebook-responsive"
          data-href={this.props.url}
          data-width="500"
          data-allowfullscreen="true">
        </div>
      </div>
    )
  }
}

FacebookLive.propTypes = {
  url: PropTypes.string
};

export default FacebookLive
