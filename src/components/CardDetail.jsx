import React, { useEffect, useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { isLoggedIn } from "../services/api-auth"
import { getCard, editDay } from "../services/api-helper"

export default function CardDetail(props) {
  const [card, setCard] = useState(null)
  const [days, setDays] = useState([])

  useEffect(() => {
    loadCard()
  }, [])

  const loadCard = async () => {
    console.log(props)
    let response = await getCard(props.match.params.id)
    console.log(response)
    setCard(response.data)
    setDays(response.data.days)
  }

  const handleX = async (e) => {
    console.log(e.target.name)
    let temp = [...days]
    temp[e.target.name].success = !temp[e.target.name].success
    setDays(temp)
    let response = await editDay(
      props.match.params.id,
      temp[e.target.name]._id,
      temp[e.target.name]
    )
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
          <div className="flex flex-wrap w-64 border-2 border-gray-300">
            {days.map((day, index) => (
              <button
                key={index}
                name={index}
                onClick={handleX}
                className={`flex w-8 h-8 border-2 border-gray-300 ${
                  days[index].success ? "bg-teal-600" : "bg-purple-600"
                }`}
              >
              </button>
            ))}
          </div>
          {/* <ProgressBar /> */}
          <button>Delete Card</button>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  } else {
    <Redirect to="/" />
  }
}
