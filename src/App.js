import './App.css';
import Wave from './components/Wave';
import { useEffect, useState } from "react";
import Overlay from './components/Overlay';
import Sea from './components/Sea';
import Buoy from './components/Buoy';

import github from "./images/github-icon.svg"
import gmail from "./images/gmail-icon.svg"
import linkedin from "./images/linkedin-icon.svg"
import wpp from "./images/wpp-icon.svg"

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='wrapper'>
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
      <Overlay />
      <Buoy />
      <Wave />
      <Sea data={offsetY} />
      <footer>
        <p>Desenvolvido por João Pedro Alarcón Duarte - (51) 99414-8603</p>
        <p>© 2022. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
