import React, { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { isLoggedIn } from "../services/api-auth"
import { getCard } from "../services/api-helper"
import Button from "./Button"
import CardGrid from "./CardGrid"

export default function CardDetail(props) {
  const [card, setCard] = useState(props.card)
  const [days, setDays] = useState([])

  useEffect(() => {
    loadCard()
  }, [])

  const loadCard = async () => {
    if (!props.card) {
      let response = await getCard(props.match.params.id)
      setCard(response.data)
      setDays(response.data.days)
    } else {
      setCard(props.card)
      setDays(props.card.days)
    }
  }

  if (isLoggedIn()) {
    if (card) {
      return (
        <div className="p-5 flex flex-col">
          <Link to="/" className="text-indigo-700">
            Home
          </Link>
          <div className="m-auto">
            <div className="py-2 text-3xl">{card.title}</div>
            <div className="py-2">{card.description}</div>
            <div className="flex flex-col items-center">
              <CardGrid card={card} days={days} setDays={setDays} />
              {/* <ProgressBar /> */}
              <div className="flex flex-row">
                <Button text={"Delete Card"} />
                <Button text={"Edit Card"} />
              </div>
              <Link to="/" className="text-indigo-700">
                Back to all cards
              </Link>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  } else {
    ;<Redirect to="/" />
  }
}
