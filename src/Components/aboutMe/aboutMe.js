import "./aboutMe.css";
import { dataAboutMe } from "../../data/dataAboutMe";

export const aboutMeSection = ()=> {
const body = document.querySelector("body");
  const section = document.createElement("section");
  const divText =document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

section.className= "aboutMe";
section.id= "aboutMe";

 h2.textContent= dataAboutMe.es.h2;
 h3.textContent= dataAboutMe.es.h3;
  p.innerHTML= dataAboutMe.es.description;

const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  esbutton.addEventListener("click", () => {
     parent.innerHTML = "";
     h2.textContent= dataAboutMe.es.h2;
     h3.textContent= dataAboutMe.es.h3;
     p.innerHTML= dataAboutMe.es.description;
  });
    enbutton.addEventListener("click", () => {
         parent.innerHTML = "";
     h2.textContent= dataAboutMe.en.h2;
     h3.textContent= dataAboutMe.en.h3;
     p.innerHTML= dataAboutMe.en.description;
    });
    nlbutton.addEventListener("click", () => {
         parent.innerHTML = "";
     h2.textContent= dataAboutMe.nl.h2;
     h3.textContent= dataAboutMe.nl.h3;
     p.innerHTML= dataAboutMe.nl.description;
    });


  body.appendChild(section);
  section.appendChild(divText);
  divText.appendChild(h2);
  divText.appendChild(h3);
  divText.appendChild(p);
}