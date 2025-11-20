export const createArticles = (array, classSection) => { 
  const divButtons = document.createElement("div");
  divButtons.className = "divArray";
  const section = document.querySelector(`.${classSection}`);
  section.appendChild(divButtons);
  
  for (const element of array) {

    const article = document.createElement("article");
    divButtons.appendChild(article);
    if (element.img) {
      article.style.backgroundImage = `url(${element.img})`;
      article.style.backgroundRepeat = "no-repeat";
      article.style.backgroundSize = "cover";
      article.style.backgroundPosition = "center";
    }

    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    textContainer.style.display = "none";
    article.appendChild(textContainer);


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
      button.textContent = "Ver";
      a.appendChild(button);
      textContainer.appendChild(a);
    }

    article.addEventListener("mouseenter", () => {
      article.style.backgroundSize = "0%";
      textContainer.style.display = "flex";
      textContainer.style.height= "100%";
      textContainer.style.flexDirection= "column";
      textContainer.style.alignItems= "center";
      textContainer.style.justifyContent="space-between";
    });

    article.addEventListener("mouseleave", () => {
      article.style.backgroundSize = "cover"; 
      textContainer.style.display = "none";
    });
  }
};
