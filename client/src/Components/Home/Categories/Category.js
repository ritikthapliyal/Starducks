import React, { useEffect, useState } from 'react'
import '../Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../../Redux/uiSlice'

function Category({category,id}) {

    const {selectedCategory} = useSelector((state) => state.uiState)
    const dispatch = useDispatch()

    const clickHandler = ()=>{
        dispatch(changeCategory(id))
    }

    return (
        <button onClick={clickHandler} className='Category' style={{backgroundColor:`${category.category === selectedCategory ? "#418971" : ""}`}}>
            <img src={category.img}></img>
            <h3 style={{color:`${category.category === selectedCategory ? "white" : ""}`}}>{category.category}</h3>
        </button>
    )
}

export default Category