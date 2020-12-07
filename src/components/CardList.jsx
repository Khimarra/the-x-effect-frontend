import React from "react"
import { Link } from "react-router-dom"
import CardDetail from "./CardDetail"
import ReadOnlyCardGrid from "./ReadOnlyCardGrid"

export default function CardList(props) {
  const cards = props.cards
  return (
    <div>
      <div>All of your cards</div>
      {cards.map((card, index) => {
        return (
          <Link to={`/cards/${card._id}`} key={index}>
            <ReadOnlyCardGrid card={card} days={card.days} />
          </Link>
        )
      })}
    </div>
  )
}
