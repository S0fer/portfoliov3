import React from "react"
import "./Heading.css"
import photo from "../images/circular.jpg"
import life from "../images/lifebuoy.svg"
export default function Heading(){
    return(
        <div className="box">
            <img src={life} alt="circular" className="circular-lifebuoy">
            </img>
                <img src={photo} alt="circular" className="circular-photo" />
        </div>
)}