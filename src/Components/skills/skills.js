import "./skills.css";
import { arraySkills } from "../../data/skillsData";


export const skillsSection = ()=> {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const divSkills =document.createElement("div");

  section.id= "skills";
  
  for (const element of arraySkills) {
    const img =document.createElement("img");
    img.src= element.img;
    img.alt= element.alt;
    divSkills.appendChild(img);
  }

  section.className="skills";
  h2.textContent=`Conocimientos`;

  body.appendChild(section);
  section.appendChild(h2);
  section.appendChild(divSkills);
}