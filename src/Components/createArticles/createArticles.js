import "./createArticles.css";

export const createArticles = (array, classSection) => {
  const section = document.querySelector(`.${classSection}`);
  const oldDiv = section.querySelector(".divArray");
  if (oldDiv) oldDiv.remove();

  const container = document.createElement("div");
  container.className = "cards";
  section.appendChild(container);

  for (const element of array) {
    const article = document.createElement("article");
    article.className = "card";

    if (element.img) {
      article.style.backgroundImage = `url(${element.img})`;
    }

    const content = document.createElement("div");
    content.className = "card-content";

    const h4 = document.createElement("h4");
    h4.textContent = element.name;

    const description = document.createElement("p");
    description.innerHTML = element.description;

    content.appendChild(h4);
    content.appendChild(description);

    if (element.link) {
      const a = document.createElement("a");
      a.href = element.link;
      a.textContent = element.button || "Ver";
      a.className = "card-btn";
      content.appendChild(a);
    }

    article.appendChild(content);
    container.appendChild(article);
  }
};