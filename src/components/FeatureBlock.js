import React from "react";

const FeatureBlock = props => {
  const icon = props.icon ? props.icon : "wrench";

  const getDescription = () => {
    if (props.description) {
      return <span>{props.description}</span>;
    }
    return (
      <span>
        In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas
        ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat.
        Maecenas condimentum enim tincidunt risus accumsan.
      </span>
    );
  };

  return (
    <li class={`fa fa-${icon}`}>
      <h3>{props.title}</h3>
      {getDescription()}
    </li>
  );
};

export default FeatureBlock;
