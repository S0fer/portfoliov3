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
    const english = props.english;
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

    const mainContent = skillData.map((item) => {
        return(
            <div className="mainSkill" key={item.index}>
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

            <main>
                <h2>{english ? "Hello, visitor!" : "Olá, visitante!"}</h2>
                <div className="mainIntroduction">
                    <p>
                    {
                        english ?
                        `
                        This website serves as a portfolio / demonstration of my skills as a Front End developer. In it I spread several decorations, which when clicked open a modal window on the screen with one of my skills and my self-declared proficiency with it. All content on this page was written in React.js and all skills, as well as the icons below, were rendered from a data file, which if changed, changes the amount of items, as well as the specs of each item. In addition, I stuck to an aquatic theme to venture into CSS, with various animations, filters and fun effects. For those interested in my services, please use the contacts on the left (or above if viewed via mobile devices). For everyone else, I hope I've entertained you with my little adventure in web development.
                        `
                        :
                        `Este website serve como um portifólio / demonstração de minhas habilidades como desenvolvedor Front End. Nele espalhei diversas decorações, que ao clicadas abrem uma janelinha na tela com uma de minhas habilidades e minha proficiência autodeclarada nela. Todo o conteúdo desta página foi escrito em React.js e todas as habilidades, assim como os ícones abaixo foram renderizados a partir de um arquivo de dados, que se alterado, muda a quantidade de itens, assim como as especificações de cada item. Além disso, me prendi a uma temática aquática para me aventurar no CSS, com diversas animações, filtros e efeitos divertidos. Àqueles interessados em meus serviços, favor utilizar os contatos à esquerda (ou acima se visualizado pelo celular). Aos demais, espero ter divertido-os com minha pequena aventura em desenvolvimento web.`
                    }
                    </p>
                </div>
                <h2>{english ? "Skills" : "Habilidades"}</h2>
                <div className="mainSkills">
                    {mainContent}
                </div>
            </main>


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