import { useState } from "react";
import { duplicateRegenerateSortArray } from "../../utils/cards-utils";
import { Card, CardProps } from "../Card";
import './styles.css'

export interface GridProps {
  cards: CardProps[];
}

export function Grid({cards}: GridProps) {
  const [stateCards, setStatesCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      if(card.id !== id) return card;
      if(card.flipped) return card;
      card.flipped = true;
      return card;
    });

    console.log(id)
    setStatesCards(newStateCards)
  }

  return(
    <div className="grid">
      {
        stateCards.map((card) => {
          return <Card {...card} key={card.id} handleClick={handleClick} />
        })
      }
    </div>
  );
}