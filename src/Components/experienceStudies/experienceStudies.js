import { arrayStudies } from "../../data/studies";
import { arrayExperience } from "../../data/workingExperience";
import { createExpSection, createStuSection } from "../createExpStuSection/createExpStuSection";
import { buttonsExpStuToOTher } from "./buttonsExpStuToOTher";
import { buttonToArticle } from "./buttonToArticle";
import "./experienceStudies.css";

export const experienceStudiesSection = () => {
  let section = document.querySelector("section.expStu");

  if (!section) {
    const body = document.querySelector("body");
    section = document.createElement("section");
    section.className = "expStu";
     section.id="exptudies";
    body.appendChild(section);
  }

  section.innerHTML = "";

  const h2 = document.createElement("h2");
  const divButtons = document.createElement("div");
  const expButton = document.createElement("button");
  const stuButton = document.createElement("button");
  
  h2.textContent = "Experiencia y Estudios";
  expButton.textContent = "Experiencia";
  expButton.type = "button";
  
  stuButton.textContent = "Estudios";
  stuButton.type = "button";

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");
  
esbutton.addEventListener("click", () => {
  h2.textContent = "Experiencia y Estudios";
  expButton.textContent = "Experiencia";
  stuButton.textContent = "Estudios";
  });
  enbutton.addEventListener("click", () => {
  h2.textContent = "Experience and Studies";
  expButton.textContent = "Experience";
  stuButton.textContent = "Studies";
  });
  nlbutton.addEventListener("click", () => {
  h2.textContent = "Ervaring en Studies";
  expButton.textContent = "Ervaring";
  stuButton.textContent = "Studies";
  });
  divButtons.className = "divButtons";

  expButton.addEventListener("click", () => createExpSection());
  stuButton.addEventListener("click", () => createStuSection());


  section.appendChild(h2);
  section.appendChild(divButtons);
  divButtons.appendChild(expButton);
  divButtons.appendChild(stuButton);
};


export const expButtonFunction = () => {
    buttonToArticle(arrayExperience,"Experiencia Laboral");
    buttonsExpStuToOTher("Ver Estudios",arrayExperience, "Ver Experiencia");
    };

export const stuButtonFunction = ()=> {
      buttonToArticle(arrayExperience,"Formación Académica");
buttonsExpStuToOTher("Ver Experiencia",arrayStudies,"Ver Estudios");
}