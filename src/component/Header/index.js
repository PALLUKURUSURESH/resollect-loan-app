import React, { useState } from "react";
import Popup from "../popup";
import{
    IoIosArrowDown  // Dropdown Arrow (beside user profile)
  } from "react-icons/io";

  import { FaUser} from "react-icons/fa";

import resollect from './images/resollect.png'

import './index.css'

const Header=()=>{
    const[Toggle,setToggle]=useState(false)

    const onToggle=()=>{
       setToggle(Toggle=>(
        !Toggle
       ))
    }

    return(
        <div className="head">
            <img src={resollect} alt="logo" className="logo"/>
            
            <div className="popup-ele">
            
                {
                    Toggle && <Popup data={Toggle}/>
                }
            </div>
            <div className="left-corner">
                <FaUser size={24} color="blue"/>
                <div className="divide">
                    <p className="text">Thushar</p>
                    <p className="text">Thushar@resollect.com</p>
                </div>
                <IoIosArrowDown size={24} className={Toggle?'toggle-btn':''} onClick={onToggle}/>
            </div>
            
            
        </div>
       

    )
}

export default Header