import React from "react";

import Card from "./Card";

const cards = [
  [
    {
      image: require("../assets/images/pic01.jpg")
    },
    {
      image: require("../assets/images/pic02.jpg")
    },
    {
      image: require("../assets/images/pic03.jpg")
    }
  ],
  [
    {
      image: require("../assets/images/pic01.jpg")
    },
    {
      image: require("../assets/images/pic02.jpg")
    },
    {
      image: require("../assets/images/pic03.jpg")
    }
  ]
];

class CardsGrid extends React.Component {
  /**
   * Each object is a card.
   * To override the placeholder text, add a text key to the below objects.
   * Pass that down to the Card component as a prop named "text"
   */

  render() {
    return (
      <div className="container">
        {cards.map((row, i) => {
          return (
            <div className="row no-collapse-1" key={i}>
              {row.map((card, i) => {
                return <Card key={i} image={card.image} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardsGrid;
