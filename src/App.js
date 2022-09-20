import './App.css';
import Wave from './components/Wave';
import { useEffect, useState } from "react";
import Overlay from './components/Overlay';
import Sea from './components/Sea';
import Buoy from './components/Buoy';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className='wrapper'>
      <header></header>
      <Overlay />
      <Buoy />
      <Wave />
      <Sea data={offsetY} />
      <footer>
        <div>© 2022. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

export default App;
