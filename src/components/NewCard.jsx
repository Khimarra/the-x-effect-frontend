import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { isLoggedIn } from "../services/api-auth"
import { newCard } from "../services/api-helper"
import DateRangeCal from "./DateRangeCal"

export default function NewCard(props) {
  const [card, setCard] = useState({})

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const createCard = async (e) => {
    e.preventDefault()
    let response = await newCard(card)
    console.log(response)
    props.history.push(`/cards/${response.data._id}`)
  }

  const handleSelect = (ranges) => {
    console.log(ranges)
    setCard({
      ...card,
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate
    })
  }

  if (isLoggedIn()) {
    return (
      <div>
        <form onSubmit={createCard}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
          ></input>
          <DateRangeCal handleSelect={handleSelect} />
          <button>Create Card</button>
        </form>
      </div>
    )

  } else {
    return (
      <Redirect to='/' />
    )
  }
}
