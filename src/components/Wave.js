import React from "react"
import "./Wave.css"
import Heading from "./Heading"
export default function Wave(){
    return(
        <div className="wrap">
            <Heading />
            <div className="wave-container">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
                        <g class="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(0,172,222, 70%)" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(0,172,222, 50%)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(0,172,222, 30%)" />
                            <use href="#gentle-wave" x="48" y="7" fill="rgba(0,172,222, 100%)" />
                        </g>
                </svg>
            </div>
        </div>
)}