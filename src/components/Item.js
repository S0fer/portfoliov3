import React from "react"
import "./Item.css"
import photo from '../images/message-in-a-bottle.svg'
export default function Item(props){

    const setModalIsOpenToTrue = props.setModalIsOpenToTrue;

    return(
        <>
            <img  className="item" alt="item" onClick={setModalIsOpenToTrue} src={photo}>
                
            </img>
        </>
)}