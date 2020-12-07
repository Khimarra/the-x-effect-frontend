import React, { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { isLoggedIn } from "../services/api-auth"
import { getCard } from "../services/api-helper"
import CardGrid from "./CardGrid"


// move card grid to new component
// call cardgrid from here (and eventually from userhome in the map function?)
// shoudl the list on home have titles? probably... 
// should cards on list be link to carddetails? also probably.
// where does state need to be, now?

export default function CardDetail(props) {
  const [card, setCard] = useState(props.card)
  const [days, setDays] = useState([])

  let successColor = "bg-green-400"

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
          <Link to="/" className="text-indigo-700 my-5">
            Home
          </Link>
          <div className="m-auto">
            <div className="py-2 text-3xl">{card.title}</div>
            <div className="py-2">{card.description}</div>
            <CardGrid card={card} days={days} setDays={setDays} />
          </div>
          {/* <ProgressBar /> */}
          <button className="mx-auto my-5 bg-indigo-500 border-b-4 border-r-4 border-indigo-700 p-3 rounded-lg text-white">
            Edit Card
          </button>
          <button className="mx-auto my-5 bg-indigo-500 border-b-4 border-r-4 border-indigo-700 p-3 rounded-lg text-white">
            Delete Card
          </button>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  } else {
    ;<Redirect to="/" />
  }
}
