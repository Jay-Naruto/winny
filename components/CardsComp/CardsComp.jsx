import React from "react";
import { useState } from "react";
import move from "lodash-move";
import { useMediaQuery } from 'react-responsive'

const CARD_COLORS = ["0", "1", "2", "3", "4", "5","6"];
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
              {
              index === 0 ? isDesktopOrLaptop ? <img src="./partner1_m.png" alt="Card" /> :<img src="./partner1.png" alt="Card" />
              :
              index === 1 ? isDesktopOrLaptop ? <img src="./partner2_m.png" alt="Card" /> : <img src="./partner2.png" alt="Card" />
              :
              index === 2 ? isDesktopOrLaptop ? <img src="./partner3_m.png" alt="Card" /> : <img src="./partner3.png" alt="Card" />
              :
              index === 3 ? isDesktopOrLaptop ? <img src="./partner4_m.png" alt="Card" /> : <img src="./partner4.png" alt="Card" />
              :
              index === 4 ? isDesktopOrLaptop ? <img src="./partner5_m.png" alt="Card" /> : <img src="./partner5.png" alt="Card" />
              :
              index === 5 ? isDesktopOrLaptop ? <img src="./partner6_m.png" alt="Card" /> : <img src="./partner6.png" alt="Card" />
              :
              index === 6 ? isDesktopOrLaptop ? <img src="./partner7_m.png" alt="Card" /> : <img src="./partner7y.png" alt="Card" />
              :null
            }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsComp;
