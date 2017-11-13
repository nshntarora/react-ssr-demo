import React from "react";

import Card from "./Card";

class CardsGrid extends React.Component {
  /**
   * Each object is a card.
   * To override the placeholder text, add a text key to the below objects.
   * Pass that down to the Card component as a prop named "text"
   */
  cards = [
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

  render() {
    return (
      <div className="container">
        {this.cards.map(row => {
          return (
            <div className="row no-collapse-1">
              {row.map(card => {
                return <Card image={card.image} />;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardsGrid;
