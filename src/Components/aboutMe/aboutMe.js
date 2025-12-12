import "./aboutMe.css";
import { dataAboutMe } from "../../data/dataAboutMe";

export const aboutMeSection = () => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  const divText = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  section.className = "aboutMe";
  section.id = "aboutMe";

  const lang = localStorage.getItem("lang") || "es";

  const updateText = (lang) => {
    h2.textContent = dataAboutMe[lang].h2;
    h3.textContent = dataAboutMe[lang].h3;
    p.innerHTML = dataAboutMe[lang].description;
  };

  updateText(lang);

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  esbutton.addEventListener("click", () => {
    localStorage.setItem("lang", "es");
    updateText("es");
  });

  enbutton.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    updateText("en");
  });

  nlbutton.addEventListener("click", () => {
    localStorage.setItem("lang", "nl");
    updateText("nl");
  });

  body.appendChild(section);
  section.appendChild(divText);
  divText.appendChild(h2);
  divText.appendChild(h3);
  divText.appendChild(p);
};
