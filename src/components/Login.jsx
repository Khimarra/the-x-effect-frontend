import React, { useState } from "react"
import { handleLogin } from "../services/api-auth"

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    handleLogin(user, () => {
      props.history.push('/')
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
        <button>Login</button>
      </form>
    </div>
  )
}
