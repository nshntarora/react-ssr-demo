import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="copyright">
        <div className="container">
          <div className="copyright">
            <p>
              Design: <a href="http://templated.co">TEMPLATED</a> Images:
              <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)
            </p>
            <ul className="icons">
              <li>
                <a href="/" className="fa fa-facebook">
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="/" className="fa fa-twitter">
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="/" className="fa fa-google-plus">
                  <span>Google+</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;