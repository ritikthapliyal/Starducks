import React from 'react'
import { useSelector } from 'react-redux'
import HistoryFood from './HistoryFood'

function History({historydata}){

    const {data} = useSelector((state) => state.uiState)
    const bag = historydata.bag

    const indexes = Object.keys(bag) 
    const orderData = indexes.map((index)=>{
        return data[index-1]
    })

    const d = new Date(historydata.DateAndTime) 
    const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
    const time = `${d.getHours()}:${d.getMinutes()}`


    return (
        <div className='historyfood-container'>
            <p>Date : {date}</p>
            <p>Time : {time}</p>
            {
               orderData.map((food)=>{ return <HistoryFood key={food.id} food={food} count={bag[food.id]}></HistoryFood>}) 
            }
        </div>
    )
}

export default History