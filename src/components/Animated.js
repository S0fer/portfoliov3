import React, {useEffect, useState} from "react"
import "./Animated.css"
export default function Animated(props){
    const fish = props.fish;
    const size = props.size;
    const fishClass = props.fishClass;
    const isShoal = props.isShoal || false;
    const [randomNumber, setRandomNumber] = useState([0, 0])
    useEffect(() => {
        console.log('useEffect ran');
        function rng(){
            const rngx = Math.floor(Math.random() * 500) + 50;
            const rngy = Math.floor(Math.random() * 100) + 50;
            setRandomNumber([rngx , rngy])
        }
        rng();
      }, []);
    const images = size.map((item, index) => {
        return(
            isShoal ?
            <div className={`imgContainer ${fishClass} shoal`} key={index} style={{left: `${randomNumber[0]}px`, top: `${randomNumber[1]}px`}}>
                <div className="shoalContainer">
                    <img src={fish} alt="fish" style={{width:`${item}px`, left: "12px" }} />
                </div>
                <div className="shoalContainer">
                    <img src={fish} alt="fish" style={{width:`${item}px`, left: "19px" }} />
                </div>
                <div className="shoalContainer">
                    <img src={fish} alt="fish" style={{width:`${item}px`, left: "3px" }} />
                </div>
                <div className="shoalContainer">
                    <img src={fish} alt="fish" style={{width:`${item}px`, left: "12px", top: "20px" }} />
                </div>
                <div className="shoalContainer">
                    <img src={fish} alt="fish" style={{width:`${item}px`, left: "0px", bottom: "10px" }} />
                </div>
            </div>
            : 
            <div className={`imgContainer ${fishClass}`} key={index} style={{left: `${randomNumber[0]}px`, top: `${randomNumber[1]}px`}}>
                <img src={fish} alt="fish" style={{width:`${item}px`}} />
            </div>
        )
    })
    return(
        <div className="animated">
            {images}
        </div>
)}