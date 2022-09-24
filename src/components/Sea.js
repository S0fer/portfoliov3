import React, {useState} from "react"
import "./Sea.css"
import MyModal from "./MyModal"
import Animated from "./Animated";
import skillData from "../data/skillData"
import textData from "../data/textData";


import whale from "../images/animals/whale.svg"
import turtle from "../images/animals/turtle.svg"
import dori from "../images/animals/dori.svg"
import nemo from "../images/animals/nemo.svg"
import gfish from "../images/animals/gfish.svg"

export default function Sea(props){
    const modalIsOpen = props.modalIsOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const english = props.english;
    const [modalData,setModalData] = useState(skillData[0]);    

    const mainContent = skillData.map((item) => {
        
        const setIndex = () =>{
            setModalData(skillData[item.index])
        }

        const handleClick = () =>{
            setIndex();
            setModalIsOpenToTrue();
        }

        return(
            <div className="mainSkill" key={item.index} onClick={handleClick}>
                <h3>{item.name}</h3>
                <img src={item.icon} alt="react" className="mainSkillImg" />
            </div>
        )
    })

    return(
        <div className="sea">
            <div>
                <h1>João Alarcón</h1>
                <h3>{english ? "Front End Developer" : "Desenvolvedor Front End"}</h3>
            </div>

            <Animated fish={whale} fishClass={"whale"} size={[850, 600, 550]} />
            <Animated fish={turtle} fishClass={"turtle"} size={[80, 130, 100]} />
            <Animated fish={gfish} fishClass={"gfish"} size={[50, 10, 34]} isShoal={true} />
            <Animated fish={nemo} fishClass={"nemo"} size={[24, 18, 12]} isShoal={true} style={{paddingLeft: "100px"}} />
            <Animated fish={dori} fishClass={"dori"} size={[20, 15, 30]} isShoal={true} />

            <main>
                <h2>{english ? "Hello, visitor!" : "Olá, visitante!"}</h2>
                <div className="mainIntroduction">
                    <p>{english ? textData[0].text : textData[1].text}</p>
                </div>
                <h2>{english ? "Skills" : "Habilidades"}</h2>
                <div className="mainSkills">
                    {mainContent}
                </div>
            </main>

            <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} modalData={modalData} english={props.english} />
        </div>
)}