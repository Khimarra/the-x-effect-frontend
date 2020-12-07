import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from '../services/api-auth'
import { getCards } from '../services/api-helper'
import CardList from './CardList'

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
      props.history.push('/')
    })
  }

  if (isLoggedIn()) {
    return (
      <div>
        <div>Welcome to X-Effect!</div>
        <div>(insert description)</div>
        <Link to="/newcard">
          <button>Create New Card</button>
        </Link>
        <CardList cards={cards} />
        <button onClick={handleClick}>Logout</button>
      </div>
    )

  } else {
    return (
      <div>
        Welcome to X-Effect!
        (insert description)
        <Link to='/login'><button>Login</button></Link>
        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    )
  }
}
