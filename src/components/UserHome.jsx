import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from '../services/api-auth'
import { getCards } from '../services/api-helper'
import CardList from './CardList'
import Login from './Login'
import Signup from './Signup'

export default function UserHome(props) {

  const [cards, setCards] = useState([])

  useEffect(() => {
    getUserCards()
  }, [])

  const getUserCards = async () => {
    let response = await getCards()
    console.log(response && response.data)
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
        Welcome to X-Effect! 
        (insert description)
        <Link to='/newcard'>
          <button>Add Card</button>
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
        <Login {...props} />
        <Signup {...props} />
      </div>
    )
  }
}
