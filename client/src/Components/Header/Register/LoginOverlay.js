import React,{Fragment} from 'react'
import reactDom from 'react-dom'
import Login from './Login'

function LoginOverlay({toggleLoginOverlay}) {
    
    const portal = document.getElementById('portal')
    
    return reactDom.createPortal(
        <Fragment>
            <div onClick={toggleLoginOverlay} className='Overlay-Wrapper'></div>
            <Login setLoginOverlay={toggleLoginOverlay}/>
        </Fragment>
        ,portal)
}

export default LoginOverlay