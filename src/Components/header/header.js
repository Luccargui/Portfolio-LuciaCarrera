import { arrayMenu } from "../../data/arrayMenu";
import { arrayOptions } from "../../data/option";
import { createMenu } from "../createMenu/createMenu";
import "./header.css";



export const headerSection = () =>  {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const logo = document.createElement("img");
  const aLogo =document.createElement("a");
  const ul= document.createElement("ul");
  const divBurger= document.createElement("div");
  const imgBurger = document.createElement("img");
  const divBurgerMenu =document.createElement("div");
  const div = document.createElement("div");
  const divButtons = document.createElement("div");
  const themeMode =document.createElement("img");

createMenu(ul);

div.classList.add("divBT");

  for (const element of arrayOptions) {
  const button = document.createElement("button");
  const imgButton =document.createElement("img");

imgButton.src= element.img;
imgButton.alt= element.language;

  divButtons.appendChild(button);
  button.appendChild(imgButton);
  }

  logo.src= "../../assets/favicon sin fondo/Favicon48nbg.png";
  aLogo.href= "#home";

imgBurger.id= "menuBurger";
imgBurger.src= "../../assets/Media/burger-bar.png";
imgBurger.alt= "menu-burger-mobile";
imgBurger.classList.add("burger");
imgBurger.addEventListener("click", ()=>{
  divBurgerMenu.classList.toggle("active");
  createMenu(divBurgerMenu);
})


themeMode.src= "../../assets/Media/day-and-night.png";
themeMode.alt = "dark-light-mode-switch";
themeMode.addEventListener("click", () =>{
  body.classList.toggle("light");
})

body.appendChild(header);
header.appendChild(nav);
header.appendChild(div);
nav.appendChild(logo);
logo.appendChild(aLogo);
nav.appendChild(ul);
nav.appendChild(divBurger);
divBurger.appendChild(imgBurger)
divBurger.appendChild(divBurgerMenu);
div.appendChild(divButtons);
div.appendChild(themeMode);
};