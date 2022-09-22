import React from "react"
import "./Sea.css"
import MyModal from "./MyModal"
export default function Sea(props){
    const modalIsOpen = props.modalIsOpen;
    const setModalIsOpen = props.setModalIsOpen;
    return(
        <div className="sea">
            <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </div>
)}