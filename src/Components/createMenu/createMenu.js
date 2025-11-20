import { arrayMenu } from "../../data/arrayMenu";

export const createMenu = (parent) => {
  parent.innerHTML="";
  for (const element of arrayMenu) {
  const li= document.createElement("li")
  const a = document.createElement("a");
    li.textContent=element.name;
    a.href=`#${element.anchor}`;
parent.appendChild(a);
a.appendChild(li);
  }
}