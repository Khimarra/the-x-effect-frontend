import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { isLoggedIn } from "../services/api-auth"
import { newCard } from "../services/api-helper"
import DateRangeCal from "./DateRangeCal"

export default function NewCard(props) {
  const [card, setCard] = useState({})
  const [dates, setDates] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    })


  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const createCard = async (e) => {
    e.preventDefault()
    let response = await newCard(card)
    console.log(response)
    setTimeout(() => {
      console.log("Hello, World!")
      props.history.push(`/cards/${response.data._id}`)
    }, 500)
  }

  const handleSelect = (ranges) => {
    console.log(ranges)
    setCard({
      ...card,
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate
    })
    setDates({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection'
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
          <DateRangeCal dates={dates} handleSelect={handleSelect} />
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
