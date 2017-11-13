import React from "react";

const Button = props => {
  return (
    <a href={props.link} className={`button ${props.size}`}>
      {props.children}
    </a>
  );
};

export default Button;
