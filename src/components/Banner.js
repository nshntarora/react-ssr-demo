import React from "react";
import Button from "./Button";

class Banner extends React.Component {
  render() {
    return (
      <div id="banner" className="container">
        <section>
          <p>
            This is <strong>Phase Shift</strong>, a responsive HTML5 site
            template freebie by <a href="http://templated.co">TEMPLATED</a>.
            Released for free under the{" "}
            <a href="http://templated.co/license">
              Creative Commons Attribution
            </a>{" "}
            license, so use it for whatever (personal or commercial) &ndash;
            just give us credit! Check out more of our stuff at{" "}
            <a href="http://templated.co">our site</a> or follow us on{" "}
            <a href="http://twitter.com/templatedco">Twitter</a>.
          </p>
          <Button link="/" size="medium">
            Read More
          </Button>
        </section>
      </div>
    );
  }
};

export default Banner;