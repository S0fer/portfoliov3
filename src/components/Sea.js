import React, {useState} from "react"
import "./Sea.css"
import MyModal from "./MyModal"
import Item from "./Item";
import skillData from "../data/skillData"

import corals from "../images/bottom.svg"

export default function Sea(props){
    const modalIsOpen = props.modalIsOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const [modalData,setModalData] = useState(skillData[0]);
    
    const itemArray = skillData.map((item) => {
        return (
            <Item
                key={item.index}
                array={item}
                setModalIsOpenToTrue={setModalIsOpenToTrue}
                setModalData={setModalData}
                skillData={skillData}
            />
        )
    })

    return(
        <div className="sea">
            <div>
                <h1>João Alarcón</h1>
                <h3>Front End Developer</h3>
            </div>
                {itemArray}
            <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} modalData={modalData} english={props.english} />

            <img src={corals} alt="corals" style={{
                position: "absolute",
                bottom: "0",
                maxWidth: "100%",
                filter: "saturate(40%)",
            }} />
        </div>
)}