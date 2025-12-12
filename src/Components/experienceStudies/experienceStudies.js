import { dataTextGenExpStu, dataTextExp, dataTextStu } from "../../data/dataTextExpStu";
import { arrayStudies } from "../../data/studies";
import { arrayExperience } from "../../data/workingExperience";
import { createExpSection, createStuSection } from "../createExpStuSection/createExpStuSection";
import { buttonsExpStuToOTher } from "./buttonsExpStuToOTher";
import { buttonToArticle } from "./buttonToArticle";
import "./experienceStudies.css";

export const experienceStudiesSection = () => {
  let section = document.querySelector("section.expStu");
 let currentLang = localStorage.getItem("lang") || "es";

  if (!section) {
    section = document.createElement("section");
    section.className = "expStu";
    section.id = "exptudies";
    document.body.appendChild(section);
  }

  section.innerHTML = "";

  const h2 = document.createElement("h2");
  const divButtons = document.createElement("div");
  const expButton = document.createElement("button");
  const stuButton = document.createElement("button");

  h2.textContent = dataTextGenExpStu[currentLang].h2;
  expButton.textContent = dataTextGenExpStu[currentLang].expButton;
  stuButton.textContent = dataTextGenExpStu[currentLang].stuButton;

  expButton.type = "button";
  stuButton.type = "button";

  divButtons.className = "divButtons";

  expButton.addEventListener("click", () => createExpSection());
  stuButton.addEventListener("click", () => createStuSection());

  section.appendChild(h2);
  section.appendChild(divButtons);
  divButtons.appendChild(expButton);
  divButtons.appendChild(stuButton);
};
export const expButtonFunction = () => {
let currentLang = localStorage.getItem("lang") || "es";

buttonToArticle(arrayExperience[currentLang], dataTextGenExpStu[currentLang].expTitle);

  buttonsExpStuToOTher(
    dataTextGenExpStu[currentLang].viewStu,
    arrayStudies,
    dataTextGenExpStu[currentLang].stuTitle
  );
};


export const stuButtonFunction = () => {
  let currentLang = localStorage.getItem("lang") || "es";
 buttonToArticle(arrayStudies[currentLang], dataTextGenExpStu[currentLang].stuTitle);

  buttonsExpStuToOTher(
    dataTextGenExpStu[currentLang].viewExp,
    arrayExperience,
    dataTextGenExpStu[currentLang].expTitle
  );
};




