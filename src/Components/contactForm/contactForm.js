import "./contactForm.css";
import { createArticles } from "../createArticles/createArticles";
import { arrayOpinions } from "../../data/arrayOpinions";


export const contactSection = () => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.id="contact";

  const h2 = document.createElement("h2");
   h2.textContent="Contacto";
    section.appendChild(h2);

  const divContact =document.createElement("div");
  divContact.classList= "divContact";
    section.appendChild(divContact);
    const divText = document.createElement("div");
    const h4 =document.createElement("h4");
    h4.textContent= "Datos de Contacto";
    const email = document.createElement("p");
    email.innerHTML= `<b>Email:</b><a href= "mailto:luciacarreraguillen@gmail.com"> luciacarreraguillen@gmail.com</a>`
    const linkedin = document.createElement("p");
    linkedin.innerHTML= `<a href= "https://www.linkedin.com/in/lucia-carrera-guillen/">Linkedin de Lucía Carrera</a>`
    const img =document.createElement("img");
    img.src="/assets/Media/Contacto.jpg";
divText.appendChild(email);
divText.appendChild(linkedin);

    divContact.appendChild(img);
    divContact.appendChild(divText);

 const h3 =document.createElement("h3");
 h3.textContent= "Opiniones";
 section.appendChild(h3);
  section.classList.add("contact");
    body.appendChild(section);
  createArticles(arrayOpinions, "contact");
}