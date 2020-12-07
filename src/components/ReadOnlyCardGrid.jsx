import React from "react"

export default function ReadOnlyCardGrid({ card, days }) {
  let date
  let today = new Date()
  today.setHours(0, 0, 0, 0)

  date = new Date(card.startDate)
  date.setDate(date.getDate() - 1)

  return (
    <div className="flex flex-col">
      <div className="m-auto">
        <div>{card.title}</div>
        <div className="w-64 grid grid-cols-7 bg-gray-300 border-2 border-gray-300">
          {days.map((day, index) => {
            date.setDate(date.getDate() + 1)
            return (
              <div
                key={index}
                name={index}
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
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
