import React from "react"

export default function UserForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={props.handleChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={props.handleChange}
      ></input>
      <button className="bg-indigo-500 border-b-4 border-r-4 border-indigo-700 p-3 rounded-lg text-white">
        {props.button}
      </button>
    </form>
  )
}
