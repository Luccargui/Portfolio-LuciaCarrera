import { arrayProjects } from "../../data/arrayProjects";
import { createArticles } from "../createArticles/createArticles";
import "./projects.css";

export const projectsSection = () => {
    const body = document.querySelector("body");

  const section = document.createElement("section");
   section.className = "project";
     body.appendChild(section);

  const h2 = document.createElement("h2");
 h2.textContent = "Proyectos";
  section.appendChild(h2);
 
  createArticles(arrayProjects, "project");
}