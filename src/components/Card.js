import React from "react";

import Button from "./Button";

const Card = props => {
  return (
    <section className="4u">
      <a href="/" className="image featured">
        <img src={props.image} alt="" />
      </a>
      <div className="box">
        {props.text ? (
          <p>{props.text}</p>
        ) : (
          <p>
            Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna
            congue rutrum wisi maecenas ligula.
          </p>
        )}
        <Button>Read more</Button>
      </div>
    </section>
  );
};

export default Card;
