import React,{Fragment} from 'react'
import UserDashboard from './UserDashboard'
import reactDom from 'react-dom'
import './Header.css'

function UserOverlay({toggleUserOverlay}) {
    
    const portal = document.getElementById('portal')

    return reactDom.createPortal(
        <Fragment>
            <div onClick={toggleUserOverlay} className='userOverlay-wrapper'></div>
            <UserDashboard toggleUserOverlay={toggleUserOverlay}/>
        </Fragment>
        ,portal)
}

export default UserOverlay