import { dataTextExp, dataTextStu } from "../../data/dataTextExpStu";
import { arrayStudies } from "../../data/studies";
import { arrayExperience } from "../../data/workingExperience";
import { createArticles } from "../createArticles/createArticles";
import { experienceStudiesSection } from "../experienceStudies/experienceStudies";

export const createExpSection = () => {
  let currentLang = localStorage.getItem("lang") || "es";
  const section = document.querySelector(".expStu");

  section.innerHTML = "";

  const t = dataTextExp[currentLang];

  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const divButtons = document.createElement("div");
  const backButton = document.createElement("button");
  const viewStuButton = document.createElement("button");

  h2.textContent = t.h2;
  h3.textContent = t.h3;

  backButton.textContent = t.back;
  viewStuButton.textContent = dataTextStu[currentLang].viewStu;

  divButtons.className = "divButtons";

  backButton.addEventListener("click", () => {
    section.innerHTML = "";
    experienceStudiesSection();
  });

  viewStuButton.addEventListener("click", () => {
    createStuSection();
  });

  createArticles(arrayExperience[currentLang], "expStu");

  const divArray = document.querySelector(".divArray");

  section.insertBefore(h2, divArray);
  section.insertBefore(h3, divArray);

  section.appendChild(divButtons);
  divButtons.appendChild(backButton);
  divButtons.appendChild(viewStuButton);
};

export const createStuSection = () => {
  let currentLang = localStorage.getItem("lang") || "es";
  const section = document.querySelector(".expStu");

  section.innerHTML = "";

  const t = dataTextStu[currentLang];

  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const divButtons = document.createElement("div");
  const backButton = document.createElement("button");
  const viewExpButton = document.createElement("button");

  h2.textContent = t.h2;
  h3.textContent = t.h3;

  backButton.textContent = t.back;
  viewExpButton.textContent = dataTextExp[currentLang].viewExp;

  divButtons.className = "divButtons";

  backButton.addEventListener("click", () => {
    section.innerHTML = "";
    experienceStudiesSection();
  });

  viewExpButton.addEventListener("click", () => {
    createExpSection();
  });

  createArticles(arrayStudies[currentLang], "expStu");

  const divArray = document.querySelector(".divArray");

  section.insertBefore(h2, divArray);
  section.insertBefore(h3, divArray);

  section.appendChild(divButtons);
  divButtons.appendChild(backButton);
  divButtons.appendChild(viewExpButton);
};
