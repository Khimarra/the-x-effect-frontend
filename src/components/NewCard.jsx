import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { isLoggedIn } from "../services/api-auth"
import { newCard } from "../services/api-helper"
import Button from "./Button"
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
  }

  const createCard = async (e) => {
    e.preventDefault()
    let response = await newCard(card)
    setTimeout(() => {
      props.history.push(`/cards/${response.data._id}`)
    }, 500)
  }

  const handleSelect = (ranges) => {
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
      <div className='p-5'>
        <Link to="/" className="text-indigo-700">
          Home
        </Link>
        <div className="text-3xl my-5 text-indigo-700">Create a card</div>
        <ul className="text-xl pb-5">
          Tips:
          <li className="text-base pl-3">
            Set a duration of at least 14 days to form new habits
          </li>
          <li className="text-base pl-3">
            Start small, one card is better than none
          </li>
          <li className="text-base pl-3">One habit per card</li>
          <li className="text-base pl-3">Think in minutes, not hours</li>
          <li className="text-base pl-3">
            Daily goals are a starting point, not a limit
          </li>
          <li className="text-base pl-3">
            Updating the card is part of the daily habit
          </li>
        </ul>
        <ul className="text-xl pb-5">
          Example daily goals:
          <li className="text-base pl-3">Meditate for 1 minute</li>
          <li className="text-base pl-3">Draw for 10 minutes</li>
          <li className="text-base pl-3">Complete one code challenge</li>
        </ul>

        <form onSubmit={createCard} className="flex flex-col">
          Card Title:
          <input
            type="text"
            name="title"
            placeholder="Example: Meditation"
            onChange={handleChange}
            className="mb-5"
          ></input>
          Description:
          <textarea
            name="description"
            rows="4"
            placeholder="Write out the specific goal. Example: Sit quietly and focus on breath for at least one minute per day, for 50 days."
            onChange={handleChange}
            className="mb-5"
          ></textarea>
          <DateRangeCal dates={dates} handleSelect={handleSelect} />
          <Link to="/">
            <Button text={"Cancel"} />
          </Link>
          <Button text={"Create Card"} />
        </form>
      </div>
    )

  } else {
    return (
      <Redirect to='/' />
    )
  }
}
