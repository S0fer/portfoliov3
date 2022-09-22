import React from "react"
import "./MyModal.css"
import Modal from "react-modal"
import Item from "./Item";
export default function MyModal(props){
    const modalIsOpen = props.modalIsOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const modalStyle = {
        overlay:{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
        },
        content:{
            background: "transparent",
            border: "none",
            padding: 0,
            maxHeight: "80%",
            maxWidth: "70%",
            margin: "auto",
            overflow: "visible",
        }
    }

    return(
        <>
            <Item setModalIsOpenToTrue={setModalIsOpenToTrue} />

            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={setModalIsOpenToFalse} shouldCloseOnOverlayClick={true} closeTimeoutMS={1000}>
                <div className="modalFilter">
                    <div>

                    </div>
                </div>
            </Modal>
        </>
)}