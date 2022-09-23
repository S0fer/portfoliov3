import React from "react"
import "./Animated.css"
import whale from "../images/animals/whale.svg"
export default function Animated(){
    return(
        <div className="animated">
            <div className="imgContainer">
                <img src={whale} alt="whale" />
            </div>
            <div className="imgContainer">
                <img src={whale} alt="whale" />
            </div>
            <div className="imgContainer">
                <img src={whale} alt="whale" />
            </div>  
        </div>
)}