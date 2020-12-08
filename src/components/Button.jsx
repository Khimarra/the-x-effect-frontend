import React from 'react'

export default function Button(props) {
  return (
    <div className='m-5'>
      <button className="mx-auto bg-indigo-500 border-b-4 border-r-4 border-indigo-700 py-2 px-4 rounded-lg text-white">
        {props.text}
      </button>
    </div>
  )
}
