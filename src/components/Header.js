import { FaHome } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import {useEffect, useState,useContext} from "react";
import {Link} from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js"
import {UserContext} from "../utils/UserContext.js";
 

export const Header = ()=>{

    
    const [btnNameReact,setbtnNameReact] = useState("login")

    const onlineStatus=useOnlineStatus()

    const data=useContext(UserContext);
    const {loggedInUser} = data;

    

    useEffect(()=>{
        console.log("useEffect called")
    },[btnNameReact])




    return (
        <div className="flex justify-between bg-indigo-300 border-2 border-black rounded-3xl items-center m-4">
            <div className="logo-container pl-2 p-4">
                <img className="w-28"
                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" 
                alt="logo"></img>
            </div>

            <div className="nav-items flex ">
                <ul className="flex gap-4 font-bold m-4 p-4 items-center">
                    <li>onlineStatus:{onlineStatus?"online":"Offline"}</li>
                    <li ><Link className="flex items-center gap-2 text-2xl underline" to="/">Home <FaHome /></Link></li>
                    <li > <Link className="flex items-center gap-2 text-2xl underline" to="/about">AboutUs <FaInfoCircle /></Link></li>
                    <li > <Link className="flex items-center gap-2 text-2xl underline" to="/grocery">Grocery <FaPhone /></Link></li>
                    <li > <Link className="flex items-center gap-2 text-2xl underline" to="/contact">ContactUs <FaPhone /></Link></li>
                    <li className="flex items-center gap-2 text-2xl underline">Cart <FaCartPlus /></li>
                    <button className="login text-2xl ml-14 bg-lime-500 p-3 rounded-3xl" onClick={()=>{
                        
                        btnNameReact==="login"
                        ?setbtnNameReact("logout")
                        :setbtnNameReact("login")
                    }}>
                    {btnNameReact}

                    </button>
                    <li  className="flex items-center gap-2 text-2xl underline">{loggedInUser} </li>

                </ul>
            </div>
        </div>
    )

    
}