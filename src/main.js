import './style.css';
import { headerSection } from "./Components/header/header";
import { arrayMenu } from './data/arrayMenu';
import { helloSection } from './Components/hello/hello';
import { skillsSection } from './Components/skills/skills';
import { aboutMeSection } from './Components/aboutMe/aboutMe';
import { experienceStudiesSection } from './Components/experienceStudies/experienceStudies';
import { projectsSection } from './Components/projects/projects';
import { contactSection } from './Components/contactForm/contactForm';

headerSection();
helloSection();
aboutMeSection();
skillsSection();
experienceStudiesSection();
projectsSection();
contactSection();

document.querySelector("#es").addEventListener("click", () => {
  localStorage.setItem("lang", "es");
helloSection();
aboutMeSection();
skillsSection();
experienceStudiesSection();
projectsSection();
contactSection();
});

document.querySelector("#en").addEventListener("click", () => {
  localStorage.setItem("lang", "en");
helloSection();
aboutMeSection();
skillsSection();
experienceStudiesSection();
projectsSection();
contactSection();
});

document.querySelector("#nl").addEventListener("click", () => {
  localStorage.setItem("lang", "nl");
helloSection();
aboutMeSection();
skillsSection();
experienceStudiesSection();
projectsSection();
contactSection();
});
