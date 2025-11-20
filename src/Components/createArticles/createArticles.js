export const createArticles = (array, classSection) => {
  const divButtons = document.createElement("div");
  divButtons.className = "divArray";
  const section = document.querySelector(`.${classSection}`);
  section.appendChild(divButtons);
  
  for (const element of array) {
const article= document.createElement("article");
divButtons.appendChild(article);

    const h4 = document.createElement("h4");
      h4.textContent = `${element.name}`;
    article.appendChild(h4);
    
if(element.title){
    const title = document.createElement("p");
            title.textContent = `${element.title}`;
    article.appendChild(title);
}

    if (element.duration) {
  const duration = document.createElement("p");
      duration.textContent = `${element.duration}`;
        article.appendChild(duration);
}
    if (element.img) {
  const img = document.createElement("img");
      img.src = `${element.img}`;
      img.alt =`${element.title}`;
        article.appendChild(img);
}

    const description = document.createElement("p");
    description.innerHTML = `${element.description}`;
    article.appendChild(description);

  if(element.link){
    const a = document.createElement("a");
    const button = document.createElement("button");

    a.href=`${element.link}`;
    button.textContent= "Ver";

    article.appendChild(a);
    a.appendChild(button);
  }
  }
};
