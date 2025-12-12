import { dataHello } from "../../data/dataHello"; 
import "./hello.css";

export const helloSection = () => {
  const body = document.querySelector("body");
  const section = document.createElement("section");
  const divText = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  section.className = "helloSection";

  const lang = localStorage.getItem("lang") || "es";

  const updateText = (lang) => {
    h2.innerHTML = dataHello[lang].h2;
    h1.textContent = dataHello[lang].h1;
    p.innerHTML = dataHello[lang].p;
  };

  updateText(lang);

  img.src = "../../assets/Media/Imagen1.jpg";
  img.alt = "me";

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  esbutton.addEventListener("click", () => {
    localStorage.setItem("lang", "es");
    updateText("es");
  });

  enbutton.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    updateText("en");
  });

  nlbutton.addEventListener("click", () => {
    localStorage.setItem("lang", "nl");
    updateText("nl");
  });

  body.appendChild(section);
  section.appendChild(divText);
  section.appendChild(img);
  divText.appendChild(h2);
  divText.appendChild(h1);
  divText.appendChild(p);
};
