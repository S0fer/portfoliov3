import React from "react"
import "./Heading.css"
import photo from "../images/frame.jpeg"
import life from "../images/lifebuoy.svg"
import eng from "../images/eng.svg"
import br from "../images/br.svg"
export default function Heading(props){
    const english = props.english;
    const setEnglish = props.setEnglish;
    const handleClick = () =>{
        english ? setEnglish(false) : setEnglish(true)
    }
    return(
        <div className="box" onClick={handleClick}>
            <img src={life} alt="circular" className="circular-lifebuoy" />
            <img src={photo} alt="circular" className="circular-photo" />
            <p>
                {english ? "Click me to change languages! " : "Clique aqui para trocar a língua! "}
                <img src={english ? eng : br} alt="flag"/>
            </p>
        </div>
)}