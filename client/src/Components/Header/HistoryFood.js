import React from 'react'
import './Header.css'

function HistoryFood({count,food}) {
  return (
    <div className='history-food'>
        <p>{food.name}</p>
        <p>X <span>{count}</span></p>
    </div>
  )
}

export default HistoryFood