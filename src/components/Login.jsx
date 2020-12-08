import React, { useState } from "react"
import { handleLogin } from "../services/api-auth"
import UserForm from "./UserForm"

export default function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user, () => {
      props.history.push('/')
    })
  }

  return (
    <div>
      <UserForm handleChange={handleChange} handleSubmit={handleSubmit} button='Login' />
    </div>
  )
}
