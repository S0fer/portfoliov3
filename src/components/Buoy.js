import React from "react"
import "./Buoy.css"
import life from "../images/lifebuoy.svg"
export default function Buoy(){
    return(
        <a className="buoy" href="#top">
            <img src={life} alt="buoy" />
        </a>
)}