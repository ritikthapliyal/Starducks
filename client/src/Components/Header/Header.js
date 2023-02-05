import React,{Fragment, useState} from 'react'
import './Header.css'
import login from '../../Assets/login.png'
import bagimg from '../../Assets/bag.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import HeaderBagOverlay from "./HeaderBagOverlay"
import LoginOverlay from './Register/LoginOverlay';
import UserOverlay from './UserOverlay';

function Header() {

    const {bag} = useSelector((state) => state.uiState)
    const {userLoggedIn,userData} = useSelector((state) => state.userState)
    
    const [displayOverlay,setDisplayOverlay] = useState(false)
    const [loginOverlay,setLoginOverlay] = useState(false)
    const [userOverlay,setUserOverlay] = useState(false)
    

    const toggleSetDisplay = () => {
        setDisplayOverlay(!displayOverlay)
    }
    const toggleLoginOverlay = () => {
        setLoginOverlay(!loginOverlay)
    }
    const toggleUserOverlay = () => {
        setUserOverlay(!userOverlay)
    }
    
    

    return (

        <Fragment>
            {displayOverlay && <HeaderBagOverlay toggleSetDisplay={toggleSetDisplay}/>}
            
            {!userLoggedIn && loginOverlay && <LoginOverlay toggleLoginOverlay={toggleLoginOverlay}/>}
            
            {userOverlay && <UserOverlay toggleUserOverlay={toggleUserOverlay}/>}

            <div className='Header'>
            
            <h1>StarBucks</h1>

            <div className='Header-right'>
                <div className='Header-options'>
                    <Link to='/'>Home</Link>
                    <Link to='/gift'>Gift</Link>
                    <Link to='/gift'>Order</Link>
                    <Link to='/gift'>Pay</Link>
                    <Link to='/gift'>Store</Link>
                </div>
                
                <div className='Header-buttons'>
                    <button onClick={toggleSetDisplay} className='bag-with-item'><span>{Object.keys(bag).length}</span><img src={bagimg} alt="Login/SignUp image"></img></button>

                    {
                        userLoggedIn 
                        ? 
                        <button 
                            onClick={toggleUserOverlay}
                            style={{
                                padding: '0rem',
                                fontSize: '0.8rem',
                                padding: '0 1rem',
                                backgroundColor: '#418971',
                                color: 'white',
                                borderRadius: '2rem',
                                cursor: 'pointer'
                            }}  
                        >{userData.email.substr(0,5)+"..."}</button>
                        :
                        <button onClick={toggleLoginOverlay}><img src={login} alt="Login/SignUp image"></img></button> 
                    }

                </div>
            </div>
        </div>

        </Fragment>
    )
}

export default Header