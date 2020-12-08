import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { isLoggedIn, logout } from "../services/api-auth"
import { getCards } from "../services/api-helper"
import Button from "./Button"
import CardList from "./CardList"
import Welcome from "./Welcome"

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
      <div className="flex flex-col p-5">
        <button onClick={handleClick} className="text-indigo-700 w-full text-right">
          Logout
        </button>
        <Welcome />
        <div className="flex justify-center">
          <Link to="/newcard">
            <Button text={"Create A Card"} />
          </Link>
        </div>
        <CardList cards={cards} />
      </div>
    )
  } else {
    return (
      <div>
        <Welcome />
        <div className="flex justify-center">
          <Link to="/signup">
            <Button text={"Signup"} />
          </Link>
          <Link to="/login">
            <Button text={"Login"} />
          </Link>
        </div>
      </div>
    )
  }
}
