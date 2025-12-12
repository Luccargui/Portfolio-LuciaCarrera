import { arrayProjects } from "../../data/arrayProjects";
import { createArticles } from "../createArticles/createArticles";
import "./projects.css";

export const projectsSection = () => {
    const body = document.querySelector("body");

  const section = document.createElement("section");
   section.className = "project";
   section.id="projects";
   
     body.appendChild(section);

  const h2 = document.createElement("h2");
 h2.textContent = "Proyectos";
  section.appendChild(h2);

  let currentLang = "es";

    createArticles(arrayProjects[currentLang], "project");

 const esbutton = document.querySelector("button#es");
 const enbutton = document.querySelector("button#en");
 const nlbutton = document.querySelector("button#nl");



esbutton.addEventListener("click", () => {
  parent.innerHTML = "";
  currentLang = "es";
  h2.textContent = "Proyectos";
  createArticles(arrayProjects[currentLang], "project");
  });
enbutton.addEventListener("click", () => {
  parent.innerHTML = "";
  currentLang = "en";
  h2.textContent = "Projects";
  createArticles(arrayProjects[currentLang], "project");
  });
nlbutton.addEventListener("click", () => {
  parent.innerHTML = "";
  currentLang = "nl";
  h2.textContent = "Projecten";
  createArticles(arrayProjects[currentLang], "project");
  });
}