import { buttonToArticle } from "./buttonToArticle";

export const buttonsExpStuToOTher = (button2Text, arrayOpuesto, h3Opuesto) => {
  const divButtons2 = document.querySelector("div.divButtons2");

  if (!divButtons2) {
    console.warn("⚠️ divButtons2 no encontrado en el DOM");
    return;
  }

  const button2 = document.createElement("button");
  button2.textContent = button2Text;

  button2.addEventListener("click", () => buttonToArticle(arrayOpuesto[currentLang], h3Opuesto));

  divButtons2.appendChild(button2);
};
