import React from "react";
import { useState } from "react";
import move from "lodash-move";
import { useMediaQuery } from 'react-responsive'

const CARD_COLORS = ["#266678", "#cb7c7a", "#36a18b", "#cda35f", "#747474","#000"];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.01;

const CardsComp = () => {
  const [cards, setCards] = useState(CARD_COLORS);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 500px)'
  })
  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div id="sponsors" className="container2">
      <ul id="cards">
        {cards.map((color, index) => (
          <li key={index} className="cardx" id={`card${index + 1}`}>
            <div
              className="card-body"
              style={{
                background: color,
                transform: `translateY(${index * CARD_OFFSET}px) scale(${1 +
                  index * SCALE_FACTOR})`, // Adjusted the scale factor
              }}
              onClick={() => moveToEnd(index)}
            >
              {color != "#000" ? (
                
                  isDesktopOrLaptop ? <img src="./logobanner_m.png" alt="Card" /> :<img src="./logobanner.png" alt="Card" />
                
                
              ) : (
                isDesktopOrLaptop ? <img src="./sponsors_m.png" alt="Card" /> : <img src="./logobanner2.png" alt="Card" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsComp;
