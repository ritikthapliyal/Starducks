import React,{useRef, useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import RecommendedFood from './RecommendedFood';
import './Home.css'

function Recommend() {

    const wrapperComponent = useRef();
    const [counter, setCounter] = useState(0)
    const {data} = useSelector((state) => state.uiState)


    const recommended = data.filter((food)=>{
        return food.tags.includes("recommended")
    })


    const moveLeft = ()=>{
        if(counter !== 0){
            setCounter(counter + 28)
        }
    }

    const moveRight = ()=>{
        if(Math.abs(counter / 28) < 14){
            setCounter(counter - 28)
        }
    }

    useEffect(()=>{
        wrapperComponent.current.style.transform = `translateX(${counter}rem)`
    },[counter])

    return (
        <div className='Recommend'>

            <button onClick={moveLeft} className='Recommend-btn-left'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color='white' className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
            </button>

            <button onClick={moveRight} className='Recommend-btn-right'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='white' strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
            </button>

            <div className='Recommend-components'>
                <div className='Recommend-wrapper' ref={wrapperComponent}>
                    {
                        recommended.map((food)=>{
                            return <RecommendedFood key={food.id} food={food} />
                        })
                    }
                </div>
            </div>  
        </div>
    )
}   

export default Recommend