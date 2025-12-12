import "./contactForm.css";
import { createArticles } from "../createArticles/createArticles";
import { arrayOpinions } from "../../data/arrayOpinions";
import { contactText } from "../../data/dataContact";

export const contactSection = () => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  section.id = "contact";
  section.classList.add("contact");

  const h2 = document.createElement("h2");
  const h4 = document.createElement("h4");
  const email = document.createElement("p");
  const linkedin = document.createElement("p");
  const h3 = document.createElement("h3");

  const divContact = document.createElement("div");
  divContact.className = "divContact";

  const divText = document.createElement("div");

  const img = document.createElement("img");
  img.src = "/assets/Media/Contacto.jpg";

  divContact.appendChild(img);
  divContact.appendChild(divText);

  section.appendChild(h2);
  section.appendChild(divContact);
  section.appendChild(h3);

  body.appendChild(section);

  const lang = localStorage.getItem("lang") || "es";

  const updateTexts = (lng) => {
    h2.textContent = contactText[lng].h2;
    h4.textContent = contactText[lng].h4;
    linkedin.innerHTML = `<a href="https://www.linkedin.com/in/lucia-carrera-guillen/">${contactText[lng].linkedin}</a>`;
    h3.textContent = contactText[lng].h3;
  };

  email.innerHTML = `<b>Email:</b><a href="mailto:luciacarreraguillen@gmail.com"> luciacarreraguillen@gmail.com</a>`;
  divText.appendChild(h4);
  divText.appendChild(email);
  divText.appendChild(linkedin);

  updateTexts(lang);

  const renderOpinions = (lng) => {
    createArticles(arrayOpinions[lng], "contact");
  };

  renderOpinions(lang);

  // Botones de idioma
  const esbutton = document.querySelector("#es");
  const enbutton = document.querySelector("#en");
  const nlbutton = document.querySelector("#nl");

  const updateLang = (lng) => {
    localStorage.setItem("lang", lng);
    updateTexts(lng);
    renderOpinions(lng);
  };

  esbutton?.addEventListener("click", () => updateLang("es"));
  enbutton?.addEventListener("click", () => updateLang("en"));
  nlbutton?.addEventListener("click", () => updateLang("nl"));
};
