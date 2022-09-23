import React from "react"
import "./MyModal.css"
import Modal from "react-modal"
export default function MyModal(props){
    const modalIsOpen = props.modalIsOpen;
    const setModalIsOpen = props.setModalIsOpen;
    const modalData = props.modalData;
    const english = props.english;

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
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={setModalIsOpenToFalse} shouldCloseOnOverlayClick={true} closeTimeoutMS={1000}>
                <div className="modalFilter">
                    <div className="innerContent">
                        <img src={modalData.icon} alt="react" className="modalImg" />
                        <div className="innerFlex">
                            <h1 style={{fontFamily:'Dancing Script'}}>{modalData.name}</h1>
                            <div className="bar">
                                <div className="label">
                                    <span style={{fontFamily:'Dancing Script'}}>{english ? "Proficiency:" : "Proficiência:"}</span>
                                </div>
                                <div className="progress-line"><span style={{width: `${modalData.level}`,}}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
)}