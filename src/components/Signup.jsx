import { useState } from "react"
import { handleSignup } from "../services/api-auth"
import UserForm from "./UserForm"

export default function Signup(props) {
  const [user, setUser] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSignup(user, () => {
      props.history.push("/")
    })
  }

  return (
    <div>
      <UserForm handleChange={handleChange} handleSubmit={handleSubmit} button='Sign Up' />
    </div>
  )
}
