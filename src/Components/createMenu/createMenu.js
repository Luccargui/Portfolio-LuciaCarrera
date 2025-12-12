import { arrayMenu } from "../../data/arrayMenu";

export const createMenu = (parent) => {

  const renderMenu = (items) => {
    parent.innerHTML = "";
    for (const element of items) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      li.textContent = element.name;
      a.href = `#${element.anchor}`;
      parent.appendChild(a);
      a.appendChild(li);
    }
  };

  const savedLang = localStorage.getItem("lang") || "es";

  renderMenu(arrayMenu[savedLang]);

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    renderMenu(arrayMenu[lang]);
  };

  esbutton.addEventListener("click", () => changeLang("es"));
  enbutton.addEventListener("click", () => changeLang("en"));
  nlbutton.addEventListener("click", () => changeLang("nl"));
};
