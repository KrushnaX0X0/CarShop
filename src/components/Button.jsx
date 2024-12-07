import React from 'react'

function Button({title,onclick}) {
  return (
    <button className='p-1 h-9 w-28  rounded-md text-white bg-blue-500 shadow-lg shadow-blue-500/50' onClick={onclick}>{title}</button>
  )
}

export default Button