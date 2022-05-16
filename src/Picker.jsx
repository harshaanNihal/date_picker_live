import React from 'react'

function Picker({onClick, date}) {
  return (
    <>
    <button onClick={onClick}>select date</button>
    <div>{date}</div>

    </>
  )
}

export default Picker
