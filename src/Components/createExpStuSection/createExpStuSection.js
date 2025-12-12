import { dataTextExp, dataTextStu } from "../../data/dataTextExpStu";
import { arrayStudies } from "../../data/studies";
import { arrayExperience } from "../../data/workingExperience";
import { createArticles } from "../createArticles/createArticles";
import { experienceStudiesSection } from "../experienceStudies/experienceStudies";


const esbutton = document.querySelector("#es");
const enbutton = document.querySelector("#en");
const nlbutton = document.querySelector("#nl");

let currentLang = localStorage.getItem("lang") || "es";

export const createExpSection = () => {
  const section = document.querySelector(".expStu");
  section.innerHTML = "";

  const h2 = document.createElement("h2");
  const h3SubSection = document.createElement("h3");
  const divButtons = document.createElement("div");
  const backToSectionButton = document.createElement("button");
  const buttonStu = document.createElement("button");

  h2.textContent = dataTextExp[currentLang].h2;
  h3SubSection.textContent = dataTextExp[currentLang].h3;

  createArticles(arrayExperience[currentLang], "expStu");

  backToSectionButton.textContent = dataTextExp[currentLang].back;
  backToSectionButton.addEventListener("click", () => {
    const expStuSection = document.querySelector("section.expStu");
    expStuSection.innerHTML = "";
    experienceStudiesSection();
  });

  buttonStu.textContent = dataTextStu[currentLang].viewStu;
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
};
export const createStuSection = () => {
  const section = document.querySelector(".expStu");
  section.innerHTML = "";

  const h2 = document.createElement("h2");
  const h3SubSection = document.createElement("h3");
  const divButtons = document.createElement("div");
  const backToSectionButton = document.createElement("button");
  const buttonExp = document.createElement("button");

  h2.textContent = dataTextExp[currentLang].h2;
  h3SubSection.textContent = dataTextExp[currentLang].h3;

  createArticles(arrayStudies[currentLang], "expStu");

  backToSectionButton.textContent = dataTextExp[currentLang].back;
  backToSectionButton.addEventListener("click", () => {
    const expStuSection = document.querySelector("section.expStu");
    expStuSection.innerHTML = "";
    experienceStudiesSection();
  });

  buttonExp.textContent = dataTextExp[currentLang].viewExp;
  buttonExp.addEventListener("click", () => {
    section.innerHTML = "";
    createExpSection();
  });

  const divArray = document.querySelector(".divArray");

  section.insertBefore(h2, divArray);
  section.insertBefore(h3SubSection, divArray);
  section.appendChild(divButtons);
  divButtons.appendChild(backToSectionButton);
  divButtons.appendChild(buttonExp);
};

esbutton?.addEventListener("click", () => {
  currentLang = "es";
  localStorage.setItem("lang", "es");
  document.querySelector(".expStu").innerHTML = "";
  experienceStudiesSection();
});

enbutton?.addEventListener("click", () => {
  currentLang = "en";
  localStorage.setItem("lang", "en");
  document.querySelector(".expStu").innerHTML = "";
  experienceStudiesSection();
});

nlbutton?.addEventListener("click", () => {
  currentLang = "nl";
  localStorage.setItem("lang", "nl");
  document.querySelector(".expStu").innerHTML = "";
  experienceStudiesSection();
});

