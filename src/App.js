import './App.css';
import Wave from './components/Wave';
import { useEffect, useState } from "react";
import ReactModal from 'react-modal';

import Navbar from './components/Navbar';
import Sea from './components/Sea';
import Buoy from './components/Buoy';

import github from "./images/github-icon.svg"
import gmail from "./images/gmail-icon.svg"
import linkedin from "./images/linkedin-icon.svg"
import wpp from "./images/wpp-icon.svg"

ReactModal.setAppElement('#root');

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [english,setEnglish] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const fixModal = modalIsOpen? 'fixModal' : ''

  return (
    <div className={`wrapper ${fixModal}`}>
      <header>
        <div className='hide'>
            <a href="https://github.com/S0fer" target="_blank" rel="noreferrer">
              <img src={github} alt="Github" className="social-icon mini" />
            </a>

            <a href="mailto:joaoad1099@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="Gmail" className="social-icon mini" />
            </a>

            <a href="https://www.linkedin.com/in/alarcon-developer/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="Linkedin" className="social-icon mini" />
            </a>
            
            <a href="https://wa.me/5551994148603" target="_blank" rel="noreferrer">
                <img src={wpp} alt="Whatsapp" className="social-icon mini" />
            </a>
        </div>
      </header>
      <Navbar />
      <Buoy />
      <Wave english={english} setEnglish={setEnglish} />
      <Sea data={offsetY} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} english={english} />
      <footer>
        <p>{english?"Developed by":"Desenvolvido por"} Jo??o Pedro Alarc??n Duarte - (51) 99414-8603</p>
        <p>?? 2022. {english?"All rights reserved.":"Todos os direitos reservados."}</p>
      </footer>
    </div>
  );
}

export default App;
