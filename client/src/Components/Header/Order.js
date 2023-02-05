import React from 'react'
import {useDispatch} from 'react-redux'
import { increment,decrement } from '../../Redux/uiSlice'

function Order({food,count}) {

    const dispatch = useDispatch()
    const Total = food.price * count

    const handleDecrement = ()=>{
        dispatch(decrement({id:food.id,price:food.price}))
    }
    const handleIncrement = () =>{
        dispatch(increment({id:food.id,price:food.price}))
    }

    return (
        <div className='Order'>
            <div className='about-item'>
                <h2>{food.name}</h2>
                <h3>{`Price : ${food.price}`}</h3>
            </div>
            <div className='about-purchase'>
                <label>Quantity </label>
                <span className='quantity'>x {count}</span>
                <p>=</p>
                <h2>{`${Total.toFixed(2)}`}</h2>
                <div className='add-subs-container'>
                    <button onClick={handleDecrement} className='subs'>-</button>
                    <button onClick={handleIncrement} className='add'>+</button>
                </div>
            </div>       
        </div>
    )
}

export default Order