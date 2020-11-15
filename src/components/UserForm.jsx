import React from 'react'

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
        <button>{props.button}</button>
    </form>
  )
}
