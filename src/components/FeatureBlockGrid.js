import React from "react";

import FeatureBlock from "./FeatureBlock";

class FeatureBlockGrid extends React.Component {
  blocks = [
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
  render() {
    return (
      <div id="main">
        <div className="container">
          <div className="row">
            {this.blocks.map(row => {
              return (
                <div className="6u">
                  <section>
                    <ul className="style">
                      {row.map(block => {
                        return (
                          <FeatureBlock icon={block.icon} title={block.title} />
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