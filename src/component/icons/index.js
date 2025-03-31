import React from "react";
import { FaUser,FaClipboardList} from "react-icons/fa";
import { 
    MdDashboard,   // Dashboard icon
    MdOutlineNotifications,  // Notifications icon
    MdOutlineGavel,  // Auction icon
    MdUploadFile,  // Data Upload icon
    MdOutlineSettings,  // Control Panel icon
    MdPeopleAlt,  // User Management icon
    MdLockOutline  // Permissions icon
  } from "react-icons/md";

import{
  IoIosArrowDown  // Dropdown Arrow (beside user profile)
} from "react-icons/io";

import { 
    AiOutlineFilter,  // Filter button icon
    AiOutlineCheckSquare  // Loan selection checkbox (alternative)
  } from "react-icons/ai";
  
const DashboardIcons = () => {
  return (
    <div style={{ fontSize: "24px", display: "grid", gap: "15px" }}>
      <p><IoIosArrowDown/></p>
      <p><AiOutlineFilter /></p>
      <h2>Dashboard Icons</h2>
      <p><MdDashboard /> Dashboard</p>
      <p><FaUser /> Profile</p>
      <p><MdOutlineNotifications /> Notifications</p>
      <p><FaClipboardList /> Notices</p>
      <p><MdOutlineGavel /> Auction</p>
      <p><MdUploadFile /> Data Upload</p>
      <p><MdOutlineSettings /> Control Panel</p>
      <p><MdPeopleAlt /> User Management</p>
      <p><MdLockOutline /> Permissions</p>

    </div>
  );
};

export default DashboardIcons;
