import React from "react"
import "./Wave.css"
import photo from "../images/circular.jpg"
import life from "../images/lifebuoy.svg"
export default function Wave(){
    return(
        <div className="wave-container">
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="box">
                <img src={life} alt="circular" className="circular-lifebuoy">
                </img>
                    <img src={photo} alt="circular" className="circular-photo" />
            </div>
        </div>
)}