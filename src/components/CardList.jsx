import React from "react"
import { Link } from "react-router-dom"
import CardDetail from "./CardDetail"
import ReadOnlyCardGrid from "./ReadOnlyCardGrid"

export default function CardList(props) {
  const cards = props.cards
  return (
    <div className="m-5 flex flex-col">
      <div className="mt-5 mb-2 text-xl">Your cards</div>
      {cards.map((card, index) => {
        return (
          <div className="py-2">
            <Link to={`/cards/${card._id}`} key={index}>
              <ReadOnlyCardGrid card={card} days={card.days} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
