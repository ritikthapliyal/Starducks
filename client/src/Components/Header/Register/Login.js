import React, { useState,useEffect } from 'react'
import {addUser,verifyUser} from '../../../Redux/userSlice'
import {useDispatch,useSelector} from 'react-redux'

import './Login.css'


function Login({toggleLoginOverlay}) {

    const dispatch = useDispatch()
    const {userLoggedIn} = useSelector((state) => state.userState)
    const [loginData,setLoginData] = useState({username:"",password:""})
    const [signupData,setSignupData] = useState({username:"",password:"",mobile:"",address:""})

    const handleLogin = (e)=>{
        e.preventDefault()
        dispatch(verifyUser(loginData))
    }
    const handleSignup = (e)=>{
        e.preventDefault()
        dispatch(addUser(signupData))
    }

    return (
        <div className='Login'>
                <h1>Welcome to <br></br><span>Starbucks</span></h1>
                <form className='Login-Left'>
                    <label>USERNAME(Email)</label>
                    <input placeholder='Enter Email Id' 
                        type="email"
                        onChange={(e)=>setLoginData({...loginData,username:e.target.value})} 
                        value={loginData.username}>    
                    </input>
                    <label>PASSWORD</label>
                    <input placeholder='Enter Password' 
                        type="password"
                        onChange={(e)=>setLoginData({...loginData,password:e.target.value})} 
                        value={loginData.password}>    
                    </input>
                    <button onClick={handleLogin}>Login</button>
                </form>

                <div style={{border:"1px solid black", borderRadius:"1rem"}}></div>
            
                <form className='Login-Right'>
                    <label>USERNAME(Email)</label>
                    <input placeholder='Enter Email Id' 
                        type="email"
                        onChange={(e)=>setSignupData({...signupData,username:e.target.value})}
                        value={signupData.username}>
                    </input>
                    <label>PASSWORD</label>
                    <input placeholder='Enter New Password' 
                        type="password"
                        onChange={(e)=>setSignupData({...signupData,password:e.target.value})}
                        value={signupData.password}>
                    </input>
                    <label>MOBILE NUMBER</label>
                    <input placeholder='Enter Mobile Number' 
                        onChange={(e)=>setSignupData({...signupData,mobile:e.target.value})}
                        value={signupData.mobile}>
                    </input>
                    <label>ADDRESS</label>
                    <input placeholder='Enter Delievery Address' 
                        onChange={(e)=>setSignupData({...signupData,address:e.target.value})}
                        value={signupData.address}></input>
                    <button onClick={handleSignup}>Sign Up</button>
                </form>
        </div>
    )
}

export default Login