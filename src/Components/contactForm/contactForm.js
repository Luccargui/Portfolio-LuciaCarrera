import "./contactForm.css";
import { createArticles } from "../createArticles/createArticles";
import { arrayOpinions } from "../../data/arrayOpinions";

export const contactSection = () => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.id = "contact";
  section.classList.add("contact");

  const h2 = document.createElement("h2");
  h2.textContent = "Contacto";
  section.appendChild(h2);

  const divContact = document.createElement("div");
  divContact.className = "divContact";
  section.appendChild(divContact);

  const divText = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = "Datos de Contacto";

  const email = document.createElement("p");
  email.innerHTML = `<b>Email:</b><a href="mailto:luciacarreraguillen@gmail.com"> luciacarreraguillen@gmail.com</a>`;

  const linkedin = document.createElement("p");
  linkedin.innerHTML = `<a href="https://www.linkedin.com/in/lucia-carrera-guillen/">Linkedin de Lucía Carrera</a>`;

  const img = document.createElement("img");
  img.src = "/assets/Media/Contacto.jpg";

  divText.appendChild(h4);
  divText.appendChild(email);
  divText.appendChild(linkedin);

  divContact.appendChild(img);
  divContact.appendChild(divText);

  const h3 = document.createElement("h3");
  h3.textContent = "Opiniones";
  section.appendChild(h3);

  body.appendChild(section);

  let currentLang = "es";

  const renderOpinions = () => {
    createArticles(arrayOpinions[currentLang], "contact");
  };

  renderOpinions();

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  esbutton.addEventListener("click", () => {
    currentLang = "es";
    h2.textContent = "Contacto";
    h4.textContent = "Datos de Contacto";
    linkedin.innerHTML = `<a href="https://www.linkedin.com/in/lucia-carrera-guillen/">Linkedin de Lucía Carrera</a>`;
    h3.textContent = "Opiniones";
    renderOpinions();
  });

  enbutton.addEventListener("click", () => {
    currentLang = "en";
    h2.textContent = "Contact";
    h4.textContent = "Contact Information";
    linkedin.innerHTML = `<a href="https://www.linkedin.com/in/lucia-carrera-guillen/">Lucía Carrera's Linkedin</a>`;
    h3.textContent = "Opinions";
    renderOpinions();
  });

  nlbutton.addEventListener("click", () => {
    currentLang = "nl";
    h2.textContent = "Contact";
    h4.textContent = "Contactgegevens";
    linkedin.innerHTML = `<a href="https://www.linkedin.com/in/lucia-carrera-guillen/">Linkedin van Lucía Carrera</a>`;
    h3.textContent = "Meningen";
    renderOpinions();
  });
};
