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
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <div>{card.title}</div>
          <div>{card.description}</div>
          <CardGrid card={card} days={days} setDays={setDays} />
          {/* <div className=" w-64 grid grid-cols-7 border-2 border-gray-300">
            {days.map((day, index) => {
              date.setDate(date.getDate() + 1)
              return (
                <button
                  key={index}
                  name={index}
                  onClick={date.getTime() === today.getTime() ? handleX : null}
                  disabled={date.getTime() === today.getTime() ? false : true}
                  style={
                    date.getTime() === today.getTime()
                      ? null
                      : { cursor: "default" }
                  }
                  className={`h-10 border-2 border-gray-300 ${
                    days[index].success
                      ? "bg-green-500"
                      : date.getTime() === today.getTime()
                      ? "bg-white border-green-500 border-4"
                      : date.getTime() > today.getTime()
                      ? "bg-gray-200"
                      : "bg-white"
                  }`}
                ></button>
              )
            })}
          </div> */}
          {/* <ProgressBar /> */}
          <button>Delete Card</button>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  } else {
    ;<Redirect to="/" />
  }
}
