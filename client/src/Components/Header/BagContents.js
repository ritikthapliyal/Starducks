import React, { useEffect,useState } from 'react'
import './Header.css'
import Order from './Order'
import { useSelector,useDispatch } from 'react-redux'
import { updateCart, userActions } from '../../Redux/userSlice'
import { clearTheBag } from '../../Redux/uiSlice'


function BagContents({toggleSetDisplay}) {

    const dispatch = useDispatch()
    const {data, bag, totalPrice} = useSelector((state) => state.uiState)
    const {updateCartStatus,userLoggedIn,userData} = useSelector((state) => state.userState)

    const indexes = Object.keys(bag) 
    const orderData = indexes.map((index)=>{
        return data[index-1]
    })


    const placeOrder = ()=>{
        if(orderData.length > 0 && userLoggedIn){
            dispatch(updateCart({_id:userData._id,bag}))
        }
    }


    const Total = totalPrice.toFixed(2)

    useEffect(()=>{
        if(updateCartStatus === "success"){
            dispatch(clearTheBag())
        }
    },[updateCartStatus])

    
    return (
        <div className='BagContents'>
            <div className='BagContents-1'>
                {
                    orderData.length > 0 ? orderData.map((food)=>{ return <Order key={food.id} food={food} count={bag[food.id]}></Order>}):
                    <h1>Order Something Delicious <br></br>And Then come Back Here.<br></br>Your Cart is Currently Empty.</h1>
                
                }

            </div>
            <div className='Bag-Messages'>
                <h4>Order Status : </h4>
                {
                    updateCartStatus === "pending" && <span>Ordering Please Wait...</span>
                }
                {
                    updateCartStatus === "rejected" && <span style={{color:"#e63950"}}>Sorry There were some issues.<br></br>Please Try Again</span>
                }
                {
                    updateCartStatus === "success" && <span style={{color:"#017d5b"}}>Order placed.<br></br>Delicious Food is On It's Way.</span>
                }
            </div>

                
            
            <div className='buy'>
                <span className='total_span'>Total : &#8377; {Total}</span>
                <div className='button-container'>
                    <button onClick={toggleSetDisplay} className='close'>Close</button>
                    <button onClick={placeOrder}
                            className='order' 
                            style={{cursor : `${ orderData.length > 0 && userLoggedIn ? "cursor" : "not-allowed"}`}}>Order</button>
                </div>
            </div>
        </div>
    )
}   

export default BagContents