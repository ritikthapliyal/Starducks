import React, { Fragment } from 'react'
import './Home.css'
import { useSelector,useDispatch } from 'react-redux'
import { updateCart} from '../../Redux/userSlice'
import { addToBag } from '../../Redux/uiSlice'


function Food({food}){

    const dispatch = useDispatch()
    const {userLoggedIn,userData} = useSelector((state) => state.userState)
    
    
    const handleAddToBag = ()=>{
        dispatch(addToBag(food))
    }

    const handleaddToFav = (e)=>{
            if(userLoggedIn){
                if(userData.favorites.includes(food.id)){
                    
                    const fav = userData.favorites.filter((id)=>{
                        return food.id != id
                    })

                    dispatch(updateCart({_id:userData._id,fav}))
                }
                else{
                    
                    const fav = [...userData.favorites] 
                    fav.push(food.id)

                    console.log(fav)
                    dispatch(updateCart({_id:userData._id,fav}))
                }
        }
    }


    return (

        <Fragment>

            <div className='Food'>
                
                <div onClick={handleaddToFav} className='Food-bookmark'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                    fill={userData.favorites && userData.favorites.includes(food.id) ? "#e63950" : "black"} class="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </div>

                <div className='Food-image-container'>
                    <img className='Food-image' src={food.image}></img>
                </div>
                
                <div className='Food-about'>
                    <h3>{food.name}</h3>
                    <p className='Food-desc'>{`${food.desc.length > 150 ? food.desc.substr(0,150)+"..." : food.desc}`}</p>
                    <div>
                        <p><span>&#8377;</span> {food.price}</p>
                        <button className='AddToBag' onClick={handleAddToBag}>Add to Bag</button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Food