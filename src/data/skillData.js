import react from "../images/skills/react.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import github from "../images/skills/github.svg";
import git from "../images/skills/git.svg";
import vscode from "../images/skills/vscode.svg";
import js from "../images/skills/js.svg";
import ts from "../images/skills/ts.svg";


const skillData = [
    {
        index: 0,
        name: "Reactjs",
        description:"Este site foi feito inteiramente em React.js, com Hooks de useState e useEffect.",
        englishDescription:"This website was made entirely with React.js, with useState and useEffect hooks.", 
        icon: react,
        level: "80%",
    },
    {
        index: 1,
        name: "HTML5",
        description:"Tenho total domínio em html, e conheço a linguagem desde 2013.",
        englishDescription:"I have total proficiency with html and have knowledge with it since 2013.",
        icon: html,
        level: "100%",
    },
    {
        index: 2,
        name: "CSS3",
        description:"Minhas habilidades com CSS são de ponta, as animações e estilizações desta página foram feitas completamente por mim.",
        englishDescription:"My CSS skills are knife sharp, styles and animations inside thi website were made entirely by me.",
        icon: css,
        level: "80%",
    },
    {
        index: 3,
        name: "Github",
        description:"Tenho bastante conhecimento com a plataforma, visto que utilizei ela para realizar commits frequentes neste projeto de 7 dias.",
        englishDescription:"I have broad knowledge of the Github platform, as you can see by my frequent commits in this 7 day project.",
        icon: github,
        level: "80%",
    },
    {
        index: 4,
        name: "Git",
        description:"Tenho bastante facilidade com Git, mas ainda utilizo de facilitadores do Git, e por isso mantive minha proficiência na média.",
        englishDescription:"I have tremendous ease with Git, but as I still use frequently of facilitators like Github Desktop, i opted to maintain my proficiency on average level.",
        icon: git,
        level: "60%",
    },
    {
        index: 5,
        name: "VS Code",
        description:"O Visual Studio Code é meu editor de texto de escolha. Apesar de não ser tão robusto quanto uma IDE, ou tão rápido quanto o Sublime text, prefiro-o pela facilidade de uso e ótimos atalhos.",
        englishDescription:"Visual Studio Code is my text editor of choice. Although it may not be as robust as an IDE, or as fast as Sublime text, I prefer it by it's ease of use and great shortcuts.",
        icon: vscode,
        level: "100%",
    },
    {
        index: 6,
        name: "Javascript",
        description:"Javascript é simplesmente a linguagem de programação mais utilizada no mundo, e isso não é por acaso, a linguagem é muito completa, e mais importante, ela é escalável. Eu amo JavaScript <3",
        englishDescription:"Javascript is simply the most used programming language in the world, and that's not by chance, as it is very complete, and more importantly, it is scalable. I just love it <3",
        icon: js,
        level: "100%",
    },
    {
        index: 7,
        name: "Typescript",
        description:"Ainda estou no início de meus estudos com Typescript, mas tenho uma boa noção de lógica de tipagem, acredito que me falta apenas treino, pois domino sua sintaxe.",
        englishDescription:"I'm still in the beggining of my Typescript studies, but I have a good notion with typed languages logic and I excel at its syntax, but I need practice.",
        icon: ts,
        level: "40%",
    },
]

export default skillData