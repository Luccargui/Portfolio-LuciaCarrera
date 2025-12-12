import './style.css';
import { headerSection } from "./Components/header/header";
import { arrayMenu } from './data/arrayMenu';
import { helloSection } from './Components/hello/hello';
import { skillsSection } from './Components/skills/skills';
import { aboutMeSection } from './Components/aboutMe/aboutMe';
import { experienceStudiesSection } from './Components/experienceStudies/experienceStudies';
import { projectsSection } from './Components/projects/projects';
import { contactSection } from './Components/contactForm/contactForm';

const renderContent = () => {
  headerSection();
  helloSection();
  aboutMeSection();
  skillsSection();
  experienceStudiesSection();
  projectsSection();
  contactSection();
};

renderContent();

const changeLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  document.body.innerHTML = '';
  renderContent();
};

document.querySelector("#es").addEventListener("click", () => changeLanguage("es"));
document.querySelector("#en").addEventListener("click", () => changeLanguage("en"));
document.querySelector("#nl").addEventListener("click", () => changeLanguage("nl"));