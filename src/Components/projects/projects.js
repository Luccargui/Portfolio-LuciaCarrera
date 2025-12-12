import { arrayProjects, h2Pro } from "../../data/arrayProjects";
import { createArticles } from "../createArticles/createArticles";
import "./projects.css";

export const projectsSection = () => {
  const body = document.querySelector("body");

  const section = document.createElement("section");
  section.className = "project";
  section.id = "projects";
  body.appendChild(section);

let currentLang = localStorage.getItem("lang") || "es";

  const h2 = document.createElement("h2");
  h2.textContent = h2Pro[currentLang];
  section.appendChild(h2);

  const parent = document.createElement("div");
  parent.className = "projects-container";
  section.appendChild(parent);

  createArticles(arrayProjects[currentLang], "project", parent);

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  const changeLang = (lang) => {
    currentLang = lang;

    h2.textContent = h2Pro[currentLang];
    parent.innerHTML = "";

    createArticles(arrayProjects[currentLang], "project", parent);

    setItem("lang", lang);
  };

  esbutton.addEventListener("click", () => changeLang("es"));
  enbutton.addEventListener("click", () => changeLang("en"));
  nlbutton.addEventListener("click", () => changeLang("nl"));
};