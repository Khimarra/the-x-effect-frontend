import React from "react"

export default function ReadOnlyCardGrid({ card, days }) {
  let date
  let today = new Date()
  today.setHours(0, 0, 0, 0)

  date = new Date(card.startDate)
  date.setDate(date.getDate() - 1)

  return (
    <div>
      <div className=" w-64 grid grid-cols-7 border-2 border-gray-300">
        {days.map((day, index) => {
          date.setDate(date.getDate() + 1)
          return (
            <div
              key={index}
              name={index}
              className={`h-10 border-2 border-gray-300 ${
                days[index].success
                  ? "bg-green-500"
                  : date.getTime() === today.getTime()
                  ? "bg-white border-green-500 border-4"
                  : date.getTime() > today.getTime()
                  ? "bg-gray-200"
                  : "bg-white"
              }`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
