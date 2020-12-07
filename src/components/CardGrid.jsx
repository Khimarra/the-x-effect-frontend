import React from "react"
import { editDay } from "../services/api-helper"

export default function CardGrid({ card, days, setDays }) {
  let date
  let today = new Date()
  today.setHours(0, 0, 0, 0)

  const handleX = async (e) => {
    let temp = [...days]
    temp[e.target.name].success = !temp[e.target.name].success
    setDays(temp)
    let response = await editDay(
      card._id,
      temp[e.target.name]._id,
      temp[e.target.name]
    )
  }

  date = new Date(card.startDate)
  date.setDate(date.getDate() - 1)

  return (
    <div>
      <div className="w-64 grid grid-cols-7 bg-gray-300 border-2 border-gray-300">
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
                  ? "bg-green-400"
                  : date.getTime() === today.getTime()
                  ? "bg-white"
                  : date.getTime() > today.getTime()
                  ? "bg-gray-200"
                  : "bg-white"
              } ${
                date.getTime() === today.getTime()
                  ? "border-green-500 border-4"
                  : ""
              }`}
            ></button>
          )
        })}
      </div>
    </div>
  )
}
