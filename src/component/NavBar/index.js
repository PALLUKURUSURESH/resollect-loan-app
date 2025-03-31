import React from "react";
import { NavLink } from "react-router-dom";
import resollect from './images/resollect.png'

import { 
    MdDashboard,   // Dashboard icon
    MdOutlineNotifications,  // Notifications icon
    MdOutlineGavel,  // Auction icon
    MdUploadFile,  // Data Upload icon
    MdOutlineSettings,  // Control Panel icon
    MdPeopleAlt,  // User Management icon
    MdLockOutline  // Permissions icon
  } from "react-icons/md";
  import { FaUser,FaClipboardList} from "react-icons/fa";
import './index.css'

const Navbar=()=>{

    const styled=({isActive})=>{
        return( isActive?'nav-link':''
        )
    }

return(
    <div className="navbar-container" style={{ fontSize: "18px"}}>
        <div>
            <NavLink to="/" className={styled}><div className="list-element"><MdDashboard /><p className="icons">Dashboard</p></div></NavLink>
            <NavLink to="/portfolio" className={styled}><div className="list-element"><FaUser /><p className="icons">Portfolio</p></div></NavLink>
            <NavLink to="/notifications" className={styled}><div className="list-element"><MdOutlineNotifications /><p className="icons">Notifications</p></div></NavLink>
            <NavLink to="/notices" className={styled}><div className="list-element"><FaClipboardList /><p className="icons">Notices</p></div></NavLink>
            <NavLink to="/auction" className={styled}><div className="list-element"><MdOutlineGavel /><p className="icons">Auction</p></div></NavLink>
            <NavLink to="/data-upload" className={styled}><div className="list-element"><MdUploadFile /><p className="icons">Data Upload</p></div></NavLink>
            <NavLink to="/control-panel" className={styled}><div className="list-element"><MdOutlineSettings /><p className="icons">Control Panel</p></div></NavLink>
            <NavLink to="/user-management" className={styled}><div className="list-element"><MdPeopleAlt /><p className="icons">User Management</p></div></NavLink>
            <NavLink to="/permissions" className={styled}><div className="list-element"><MdLockOutline /><p className="icons">Permissions</p></div></NavLink>
        </div>
        <div className="split">
            <p>Powered By</p>
            <img src={resollect} className='logo-img' alt="footer-image"/>
        </div>
        
    </div>
)
}

export default Navbar