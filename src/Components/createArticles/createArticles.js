import "./createArticles.css"

export const createArticles = (array, classSection) => {
  const section = document.querySelector(`.${classSection}`);
  const oldDiv = section.querySelector(".divArray");
  if (oldDiv) oldDiv.remove();

  const divButtons = document.createElement("div");
  divButtons.className = "divArray";
  section.appendChild(divButtons);

  const buildText = (element, textContainer) => {
    const h4 = document.createElement("h4");
    h4.textContent = element.name;
    textContainer.appendChild(h4);

    if (element.title) {
      const title = document.createElement("p");
      title.textContent = element.title;
      textContainer.appendChild(title);
    }

    if (element.duration) {
      const duration = document.createElement("p");
      duration.textContent = element.duration;
      textContainer.appendChild(duration);
    }

    const description = document.createElement("p");
    description.innerHTML = element.description;
    textContainer.appendChild(description);

    if (element.link) {
      const a = document.createElement("a");
      a.href = element.link;

      const button = document.createElement("button");
      button.textContent = element.button || "Ver";
      a.appendChild(button);

      textContainer.appendChild(a);
    }
  };

  for (const element of array) {
    const article = document.createElement("article");
    divButtons.appendChild(article);

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    article.appendChild(textContainer);

    const baseFlex = {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between"
    };

    if (element.img) {
      article.style.backgroundImage = `url(${element.img})`;
      article.style.backgroundRepeat = "no-repeat";
      article.style.backgroundSize = "cover";
      article.style.backgroundPosition = "center";
      textContainer.style.display = "none";

      article.addEventListener("mouseenter", () => {
        article.style.backgroundSize = "0%";
        Object.assign(textContainer.style, baseFlex);
      });

      article.addEventListener("mouseleave", () => {
        article.style.backgroundSize = "cover";
        textContainer.style.display = "none";
      });
    } else {
      Object.assign(textContainer.style, baseFlex);
    }

    buildText(element, textContainer);
  }
};