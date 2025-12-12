import { buttonToArticle } from "./buttonToArticle";

export const buttonsExpStuToOTher = (buttonText, arrayDestino, h3Title) => {
  const divButtons2 = document.querySelector("div.divButtons2");

  if (!divButtons2) {
    console.warn("⚠️ divButtons2 no encontrado");
    return;
  }

  const currentLang = localStorage.getItem("lang") || "es";

  const button2 = document.createElement("button");
  button2.textContent = buttonText;

  button2.addEventListener("click", () => {
    buttonToArticle(arrayDestino[currentLang], h3Title);
  });

  divButtons2.appendChild(button2);
};
