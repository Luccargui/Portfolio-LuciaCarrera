import { createArticles } from "../createArticles/createArticles";


export const buttonToArticle = (array, textoh3) => {
  const section = document.querySelector("section.expStu");
  const divButtons = document.querySelector("div.divButtons");

  section.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.textContent = textoh3;
  section.appendChild(h3);

  createArticles(array);

  const divButtons2 = document.createElement("div");
  divButtons2.className = "divButtons2";
  section.appendChild(divButtons2);

  const backToSectionButton = document.createElement("button");
  const button2 = document.createElement("button");

  backToSectionButton.textContent = "Volver atrás";
  section.appendChild(divButtons2);
  divButtons2.appendChild(backToSectionButton);
  divButtons2.appendChild(button2);


  backToSectionButton.addEventListener("click", () => {
    section.remove();
    experienceStudiesSSection(); 
  });

  return divButtons2;
};
