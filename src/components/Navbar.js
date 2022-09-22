import React from "react"
import "./Navbar.css"
import github from "../images/github-icon.svg"
import gmail from "../images/gmail-icon.svg"
import linkedin from "../images/linkedin-icon.svg"
import wpp from "../images/wpp-icon.svg"
export default function Navbar(){
    return(
        <div className="navbar">
            <a href="https://github.com/S0fer" target="_blank" rel="noreferrer">
                <img src={github} alt="Github" className="social-icon" />
            </a>
            <a href="mailto:joaoad1099@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="Gmail" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/alarcon-developer/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Linkedin" className="social-icon" />
            </a>
            <a href="https://wa.me/5551994148603" target="_blank" rel="noreferrer">
                <img src={wpp} alt="Whatsapp" className="social-icon" />
            </a>
        </div>
)}