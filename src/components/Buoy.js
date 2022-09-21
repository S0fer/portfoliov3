import React from "react"
import "./Buoy.css"
import arrow from "../images/lifebuoy-arrow.svg"
export default function Buoy(){
    return(
        <a className="buoy" href="#top">
            <img src={arrow} alt="buoy" />
        </a>
)}