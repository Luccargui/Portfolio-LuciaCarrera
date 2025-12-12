import { arrayOptions } from "../../data/option";
import { createMenu } from "../createMenu/createMenu";
import "./header.css";

const createLanguageButtons = () => {
  const container = document.createElement("div");
  container.classList.add("divBT");

  const divButtons = document.createElement("div");

  for (const element of arrayOptions) {
    const button = document.createElement("button");
    const imgButton = document.createElement("img");

    button.id = element.id;
    imgButton.src = element.img;
    imgButton.alt = element.language;

    button.appendChild(imgButton);
    divButtons.appendChild(button);
  }

  container.appendChild(divButtons);
  return container;
};

const createLogo = () => {
  const aLogo = document.createElement("a");
  const logo = document.createElement("img");

  aLogo.href = "#home";
  logo.src = "../../assets/favicon sin fondo/Favicon48nbg.png";

  aLogo.appendChild(logo);
  return aLogo;
};

const createBurgerMenu = (parentMenu) => {
  const divBurger = document.createElement("div");
  const imgBurger = document.createElement("img");
  const divBurgerMenu = document.createElement("div");

  imgBurger.id = "menuBurger";
  imgBurger.src = "../../assets/Media/burger-bar.png";
  imgBurger.alt = "menu-burger-mobile";
  imgBurger.classList.add("burger");

  imgBurger.addEventListener("click", () => {
    divBurgerMenu.classList.toggle("active");
    createMenu(divBurgerMenu);
  });

  divBurger.appendChild(imgBurger);
  divBurger.appendChild(divBurgerMenu);

  return divBurger;
};

const createThemeSwitcher = () => {
  const themeMode = document.createElement("img");
  themeMode.src = "../../assets/Media/day-and-night.png";
  themeMode.alt = "dark-light-mode-switch";

  themeMode.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("light");

    localStorage.setItem(
      "theme",
      body.classList.contains("light") ? "light" : "dark"
    );
  });

  return themeMode;
};

export const headerSection = () => {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.id= "menuList";

  const logo = createLogo();
  const languageButtons = createLanguageButtons();
  const themeSwitcher = createThemeSwitcher();
   const burgerMenu = createBurgerMenu(ul);

  body.appendChild(header);
  header.appendChild(nav);

  nav.appendChild(logo);
  nav.appendChild(ul);
  nav.appendChild(burgerMenu);

  languageButtons.appendChild(themeSwitcher);
  header.appendChild(languageButtons);
    createMenu(ul);
};