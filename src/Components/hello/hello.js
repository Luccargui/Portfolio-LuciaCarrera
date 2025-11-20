import "./hello.css";


export const helloSection = () =>{
  const body = document.querySelector("body");
  const section =document.createElement("section");
  const divText = document.createElement("div");
  const img = document.createElement("img");
  const h2 =document.createElement("h2");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  section.className= "helloSection";
h2.innerHTML= `<img src= "../public/assets/Media/saludo-vulcano-unscreen.gif" style="width:20px; 1background-color: black"> ¡Hola! Soy`;
h1.textContent= `Lucía Carrera`;
p.innerHTML= `Full Stack Developper en proceso <img src= "../../assets/Media/puno.png" style="width:16px">`;
p.addEventListener("mouseenter", ()=> {
p.innerHTML = `
 Full Stack Developper en proceso 
  <img src="../../assets/Media/choque-de-punos-unscreen.gif"
       style="width:40px; filter: drop-shadow(0 0 10px white) !important;">
`;
});
p.addEventListener("mouseleave", ()=> {
p.innerHTML= `Full Stack Developper en proceso <img src= "../../assets/Media/puno.png" style="width:16px;">`;
});

img.src="../../assets/Media/Imagen1.jpg";
img.alt="me";

body.appendChild(section);
section.appendChild(divText);
section.appendChild(img);
divText.appendChild(h2);
divText.appendChild(h1)
divText.appendChild(p);
}