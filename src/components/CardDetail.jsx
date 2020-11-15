import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../services/api-auth'
import { getCard } from '../services/api-helper'

export default function CardDetail(props) {

  const [card, setCard] = useState(null)

  useEffect(() => {
    loadCard()
  }, [])

  const loadCard = async () => {
    console.log(props)
    let response = await getCard(props.match.params.id)
    console.log(response)
    setCard(response.data)
  }

  if (isLoggedIn()) {
    if (card) {
      return (
        <div>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <div>{card.title}</div>
          <div>{card.description}</div>
          {/* <CardGrid /> */}
          {/* <ProgressBar /> */}
          <button>Delete Card</button>
        </div>
      )
  
    } else {
      return (
        <div>Loading...</div>
      )
    }

  } else {
    <Redirect to='/' />
  }
}
