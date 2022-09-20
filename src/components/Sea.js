import React from "react"
import "./Sea.css"
export default function Sea(props){
    return(
        <div className="sea">
            <p style={{padding: "50vw"}}>{props.data}</p>
        </div>
)}