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
            maxHeight: "95%",
            maxWidth: "95%",
            margin: "auto",
            overflow: "visible",
        }
    }

    return(
        <>
            <Modal isOpen={modalIsOpen} style={modalStyle} onRequestClose={setModalIsOpenToFalse} shouldCloseOnOverlayClick={true} closeTimeoutMS={1000}>
                <div className="modalFilter">
                    <div className="innerContent">
                        <div className="innerFlex">
                            <h1 style={{fontSize:'1.2rem'}}>{modalData.name} <img src={modalData.icon} alt="react" className="modalImg" /></h1>
                            <p style={{fontSize:'.9rem'}}>{english ? modalData.englishDescription : modalData.description}</p>
                            <div className="bar">
                                <div className="label">
                                    <span>{english ? "Proficiency:" : "Proficiência:"}</span>
                                </div>
                                <div className="progress-line"><span style={{width: `${modalData.level}`,}}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
)}