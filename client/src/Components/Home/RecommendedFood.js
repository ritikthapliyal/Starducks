import React from 'react'

function RecommendedFood({food}) {
    return (
        <div className='RecommendedFood'>
            <img src={food.image}></img>
            <div className='RecommendedFood-info'>
                <h4>{food.name}</h4>
                <p>Price: {food.price}</p>
            </div>
        </div>
    )
}

export default RecommendedFood