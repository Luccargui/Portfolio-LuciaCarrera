import "./aboutMe.css";

export const aboutMeSection = ()=> {
const body = document.querySelector("body");
  const section = document.createElement("section");
  const divText =document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

section.className= "aboutMe";
section.id= "aboutMe";
h2.textContent= `Conóceme`;
h3.textContent= `Hi, I'm Lucía — a curious mind with a strategy-driven heart.`;
p.innerHTML= `<p>My journey into the world of digital marketing wasn't linear — it's been a path shaped by curiosity, creativity, and a constant desire to understand how stories connect people and brands. From studying English in Seville and Amsterdam to managing SEO strategies and launching digital campaigns, every step has helped me grow into the versatile professional I am today.</p>
</br>

<p>I've worked in fast-paced marketing teams where data, design, and deadlines collide — and I've thrived there. I've led CRM implementations, built content strategies from scratch, optimized websites for search engines, and managed multi-channel campaigns across email, social, and SEM. Whether it's crafting a compelling email flow or fine-tuning a social ad budget, I'm driven by results and meaning.</p>
</br>
<p>Recently, I took that curiosity a step further: I'm currently studying an MBA in Full Stack (IT) to deepen my understanding of tech. I've always believed that marketing and technology go hand in hand — and this knowledge is becoming a powerful tool that strengthens everything I do.</p>
</br>
<p>Because good marketing isn't just about visibility — it's about clarity, consistency, and real connection. And I want to keep building at that intersection, where strategy meets creativity and tech becomes an enabler.</p>
</br>
<p>So, if you're looking for someone who blends analytical thinking with creative flair — and who's always learning — you're in the right place.</p>
</br>
<p>Let's build something that matters.</p>`;

  body.appendChild(section);
  section.appendChild(divText);
  divText.appendChild(h2);
  divText.appendChild(h3);
  divText.appendChild(p);
}