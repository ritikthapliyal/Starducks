import React, { useEffect, useState } from 'react'
import './Home.css'
import Food from './Food'
import { useSelector } from 'react-redux'


function getFoodArray(data,category){
    return data.filter((food)=>{
        return food.tags.includes(category)
    })
}



function FoodOptions(){

    const {data, selectedCategory} = useSelector((state) => state.uiState)
    const [foodArray,setFoodArray] = useState(getFoodArray(data,selectedCategory))

    
    useEffect(()=>{  
        setFoodArray(getFoodArray(data,selectedCategory))
    },[selectedCategory])


    return (
        <div className='Food_Option'>
                {
                    foodArray.map((food,index)=>{
                        return <Food key={index} food={food}></Food>
                    }) 
                } 
        </div>  
    )
}

export default FoodOptions