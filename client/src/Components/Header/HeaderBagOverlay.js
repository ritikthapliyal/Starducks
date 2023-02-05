import React,{Fragment} from 'react'
import BagContents from './BagContents'
import reactDom from 'react-dom'

function HeaderBagOverlay({toggleSetDisplay}) {
    
    const portal = document.getElementById('portal')
    
    return reactDom.createPortal(
        <Fragment>
            <div onClick={toggleSetDisplay} className='Overlay-Wrapper'></div>
            <BagContents toggleSetDisplay={toggleSetDisplay}/>
        </Fragment>
        ,portal)
}

export default HeaderBagOverlay