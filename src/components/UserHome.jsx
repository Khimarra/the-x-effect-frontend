import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { isLoggedIn, logout } from "../services/api-auth"
import { getCards } from "../services/api-helper"
import CardList from "./CardList"

// should create navbar component to handle home and logout buttons

export default function UserHome(props) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getUserCards()
  }, [])

  const getUserCards = async () => {
    let response = await getCards()
    setCards(response && response.data)
  }

  const handleClick = () => {
    logout(() => {
      props.history.push("/")
    })
  }

  if (isLoggedIn()) {
    return (
      <div className="p-5">
        <div className="text-3xl m-5 text-indigo-700">Welcome to X-Effect!</div>
        <div className="text-xl m-5">A daily habit tracker</div>
        <div className="m-5">
          Create a card to track each new habit. Once you have done the thing,
          tap or click the highlighted square to mark it as complete! Can you
          finish a whole card?
        </div>
        <div className="flex">
          <Link
            to="/newcard"
            className="m-auto bg-indigo-500 border-b-4 border-r-4 border-indigo-700 p-3 rounded-lg text-white"
          >
            Create A Card
          </Link>
        </div>
        <CardList cards={cards} />
        <div className="flex">
          <button
            onClick={handleClick}
            className="m-auto bg-indigo-500 border-b-4 border-r-4 border-indigo-700 p-3 rounded-lg text-white"
          >
            Logout
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        Welcome to X-Effect! (insert description)
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    )
  }
}
