import './App.css';
import Wave from './components/Wave';
import { useEffect, useState } from "react";
import Overlay from './components/Overlay';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <header></header>
      <Overlay info={offsetY} />
      <Wave style={{transform: `translateY(${offsetY * 0.5}px)`}} />
      <div style={{background: "#015871", height: "500vh", textAlign: "center", color: "white", fontSize: "2rem"}}>
        <p style={{postion: "fixed", padding: "50%"}}>{offsetY}</p>
      </div>
      <footer>
        <div>© 2022. Todos os direitos reservados.</div>
      </footer>
    </>
  );
}

export default App;
