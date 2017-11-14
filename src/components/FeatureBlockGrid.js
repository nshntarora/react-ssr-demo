import React from "react";

import FeatureBlock from "./FeatureBlock";

const blocks = [
  [
    {
      title: "Integer ultrices",
      icon: "wrench"
    },
    {
      title: "Aliquam luctus",
      icon: "leaf"
    }
  ],
  [
    {
      title: "Integer ultrices",
      icon: "cogs"
    },
    {
      title: "Aliquam luctus",
      icon: "road"
    }
  ]
];

class FeatureBlockGrid extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="container">
          <div className="row">
            {blocks.map((row, i) => {
              return (
                <div className="6u" key={i}>
                  <section>
                    <ul className="style">
                      {row.map((block, i) => {
                        return (
                          <FeatureBlock key={i} icon={block.icon} title={block.title} />
                        );
                      })}
                    </ul>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureBlockGrid;