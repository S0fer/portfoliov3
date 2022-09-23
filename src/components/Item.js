import React from "react"
import "./Item.css"
export default function Item(props){
    const setModalIsOpenToTrue = props.setModalIsOpenToTrue;
    const dataArray = props.array;
    const setModalData = props.setModalData;
    const skillData = props.skillData;
    const setIndex = () =>{
        setModalData(skillData[dataArray.index])
    }

    return(
        <div onClick={setIndex} className="itemBorder">
            <img  className="item" alt="item" onClick={setModalIsOpenToTrue} src={dataArray.animal} />
        </div>
)}