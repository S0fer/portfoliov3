import React, {useState} from "react"
import "./Sea.css"
import MyModal from "./MyModal"
import Animated from "./Animated";
import skillData from "../data/skillData"
import textData from "../data/textData";

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

            <Animated />

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