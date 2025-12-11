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

  renderMenu(arrayMenu.es);

  const esbutton = document.querySelector("button#es");
  const enbutton = document.querySelector("button#en");
  const nlbutton = document.querySelector("button#nl");

  esbutton.addEventListener("click", () => renderMenu(arrayMenu.es));
  enbutton.addEventListener("click", () => renderMenu(arrayMenu.en));
  nlbutton.addEventListener("click", () => renderMenu(arrayMenu.nl));
};
