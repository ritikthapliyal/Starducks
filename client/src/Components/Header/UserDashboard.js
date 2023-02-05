import React,{ useState} from 'react'
import './Header.css'
import History from './History'
import { useSelector } from 'react-redux'


function UserDashboard({toggleUserOverlay}) {

    const {userLoggedIn,userData} = useSelector((state) => state.userState)
    const [page,setpage] = useState({userDashboard:true,orderHistory:false,favourite:false})

    return (
            
            <div className='UserDashboard'>

                {
                    page.userDashboard && <div className='page-userdashboard'>
                        <div>
                            <p>Name :</p>
                            <h3>{userData.email}</h3>
                        </div>
                        
                        <div>
                            <p>Mobile Number :</p>
                            <h4>{userData.mobile}</h4>
                        </div>
                        
                        <div>
                            <p>Address : </p>
                            <h5>{userData.address}</h5>
                        </div>

                        <div>
                            <button onClick={()=>setpage({userDashboard:false,orderHistory:false,favourite:true})}>My Favourites</button>
                            <button onClick={()=>setpage({userDashboard:false,orderHistory:true,favourite:false})}>Order History</button>
                        </div>
                    </div>
                }
                {
                    page.orderHistory && <div className='history-data-container'>{
                            userData.orderHistory.length > 0 ? userData.orderHistory.map((historydata)=>{
                                return <History historydata={historydata}></History>
                            })
                            : <h3>No Orders Placed Yet</h3>
                        }
                    </div>
                }
            </div>
            


    )
}

export default UserDashboard