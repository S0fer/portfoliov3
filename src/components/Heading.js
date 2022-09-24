import React from "react"
import "./Heading.css"
import eng from "../images/eng.svg"
import br from "../images/br.svg"
import buoyImg from "../images/buoyImg.svg"
export default function Heading(props){
    const english = props.english;
    const setEnglish = props.setEnglish;
    const handleClick = () =>{
        english ? setEnglish(false) : setEnglish(true)
    }
    return(
        <div className="box" onClick={handleClick}>
            <img src={buoyImg} alt="circular" className="circular-lifebuoy" />
            <p>
                {english ? "Click me to change languages! " : "Clique aqui para trocar a língua! "}
                <img src={english ? eng : br} alt="flag"/>
            </p>
        </div>
)}