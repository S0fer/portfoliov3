import React from "react"
import "./Overlay.css"
import github from "../images/github-icon.svg"
import gmail from "../images/gmail-icon.svg"
import linkedin from "../images/linkedin-icon.svg"
import wpp from "../images/wpp-icon.svg"
export default function Overlay(props){

    const test = props.info;
    return(
        <div className="overlay">
            <a href="https://github.com/S0fer" target="_blank" rel="noreferrer">
                <img src={github} alt="Github" class="social-icon" />
            </a>
            <a href="mailto:joaoad1099@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="Gmail" class="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/alarcon-developer/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Linkedin" class="social-icon" />
            </a>
            <a href="https://wa.me/5551994148603" target="_blank" rel="noreferrer">
                <img src={wpp} alt="Whatsapp" class="social-icon" />
            </a>
            <div>
                {test}
            </div>
        </div>
)}