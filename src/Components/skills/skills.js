import "./skills.css";
import { arraySkills } from "../../data/skillsData";

export const skillsSection = () => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const divSkills = document.createElement("div");

  section.id = "skills";
  section.className = "skills";

  const lang = localStorage.getItem("lang") || "es";

  const titles = {
    es: "Conocimientos",
    en: "Skills",
    nl: "Vaardigheden"
  };

  const updateSkillsLang = (lang) => {
    h2.textContent = titles[lang];
  };

  updateSkillsLang(lang);

  for (const element of arraySkills) {
    const img = document.createElement("img");
    img.src = element.img;
    img.alt = element.alt;
    divSkills.appendChild(img);
  }

  body.appendChild(section);
  section.appendChild(h2);
  section.appendChild(divSkills);

  const esbutton = document.querySelector("#es");
  const enbutton = document.querySelector("#en");
  const nlbutton = document.querySelector("#nl");

  esbutton?.addEventListener("click", () => {
    localStorage.setItem("lang", "es");
    updateSkillsLang("es");
  });

  enbutton?.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    updateSkillsLang("en");
  });

  nlbutton?.addEventListener("click", () => {
    localStorage.setItem("lang", "nl");
    updateSkillsLang("nl");
  });
};
