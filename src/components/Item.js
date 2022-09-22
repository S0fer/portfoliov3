import React from "react"
import "./Item.css"
import photo from '../images/message-in-a-bottle.svg'
export default function Item(props){
    const setModalIsOpenToTrue = props.setModalIsOpenToTrue;
    const dataArray = props.array;
    const setModalData = props.setModalData;
    const skillData = props.skillData;
    const setIndex = () =>{
        setModalData(skillData[dataArray.index])
    }

    return(
        <div onClick={setIndex}>
            <img  className="item" alt="item" onClick={setModalIsOpenToTrue} src={photo} />
        </div>
)}