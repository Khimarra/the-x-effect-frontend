import React from "react"
import CardDetail from "./CardDetail"

export default function CardList(props) {
  console.log(props.cards)
  const cards = props.cards
  return (
    <div>
      <div>All of your cards</div>
      {cards.map((card, index) => {
        return (
          <div>
            <CardDetail key={index} name={index} card={card} />
          </div>
        )
      })}
    </div>
  )
}
