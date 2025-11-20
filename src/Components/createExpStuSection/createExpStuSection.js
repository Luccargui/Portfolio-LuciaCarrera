import { arrayStudies } from "../../data/studies";
import { arrayExperience } from "../../data/workingExperience";
import { createArticles } from "../createArticles/createArticles";
import { experienceStudiesSection } from "../experienceStudies/experienceStudies";

export const createExpSection = () => {
  const section = document.querySelector(".expStu");
  section.innerHTML= "";
   const h2 = document.createElement("h2");
   const h3SubSection = document.createElement("h3");
   const divButtons= document.createElement("div");
const backToSectionButton = document.createElement("button");
const buttonStu = document.createElement("button");

h2.textContent = "Experiencia y Estudios";
h3SubSection.textContent = "Experiencia Laboral";
createArticles(arrayExperience, "expStu");
backToSectionButton.textContent = "Volver Atrás";
backToSectionButton.addEventListener("click", () => {
  const expStuSection = document.querySelector("section.expStu");
  if (expStuSection) { 
    expStuSection.remove();
  }
  experienceStudiesSection();
});
buttonStu.textContent = "Ver Estudios";
buttonStu.addEventListener("click", () => {
  section.innerHTML = "";
  createStuSection();
});

const divArray = document.querySelector(".divArray");

section.insertBefore(h2, divArray);
section.insertBefore(h3SubSection, divArray);
section.appendChild(divButtons);
divButtons.appendChild(backToSectionButton);
divButtons.appendChild(buttonStu);
}

export const createStuSection = () => {
  const section = document.querySelector(".expStu");
  section.innerHTML= "";
   const h2 = document.createElement("h2");
   const h3SubSection = document.createElement("h3");
   const divButtons= document.createElement("div");
const backToSectionButton =document.createElement("button");
const buttonExp =document.createElement("button");

     h2.textContent = "Experiencia y Estudios";
     h3SubSection.textContent= "Formación Académica";
createArticles(arrayStudies, "expStu");
backToSectionButton.textContent= "Volver Atrás";
backToSectionButton.addEventListener("click", () => {
  const expStuSection = document.querySelector("section.expStu");
  if (expStuSection) { 
    expStuSection.remove();
  }
  experienceStudiesSection();
     }
);
buttonExp.textContent = "Ver Experiencia";
buttonExp.addEventListener("click", ()=> {
      section.innerHTML= "";
     createExpSection();
     }
);

const divArray = document.querySelector(".divArray");

section.insertBefore(h2, divArray);
section.insertBefore(h3SubSection, divArray);
section.appendChild(divButtons);
    section.appendChild(divButtons);
    divButtons.appendChild(backToSectionButton);
   divButtons.appendChild(buttonExp);
}