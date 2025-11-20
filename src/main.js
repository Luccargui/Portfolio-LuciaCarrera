import './style.css';
import { headerSection } from "./Components/header/header";
import { arrayMenu } from './data/arrayMenu';
import { helloSection } from './Components/hello/hello';
import { skillsSection } from './Components/skills/skills';
import { aboutMeSection } from './Components/aboutMe/aboutMe';
import { experienceStudiesSection } from './Components/experienceStudies/experienceStudies';
import { projectsSection } from './Components/projects/projects';

headerSection(arrayMenu);
helloSection();
aboutMeSection();
skillsSection();
experienceStudiesSection();
projectsSection();