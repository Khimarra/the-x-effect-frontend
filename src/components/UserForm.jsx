import React from "react"
import Button from "./Button"

export default function UserForm(props) {
  return (
    <div className="p-5">
      <div className="text-3xl pb-5 text-indigo-700">Account {props.button}</div>

      <form onSubmit={props.handleSubmit} className="flex flex-col">
        Email:
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={props.handleChange}
        ></input>
        Password:
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={props.handleChange}
        ></input>
        <div className="m-auto">
          <Button text={`${props.button}`} />
        </div>
      </form>
    </div>
  )
}
