// get root id for custom element with javascript

const root = document.getElementById("root");


// create a Custom Element 
const box = document.createElement("div");
  box.classList.add("box");

  const heading = document.createElement("h1");
  const para = document.createElement("p");
  const btn = document.createElement("button");


  // create a  node text here

  const headingText = document.createTextNode("Hello JavaScript");
  const paraText = document.createTextNode("I'm Love Too Much JavaScript!");
  const btnText = document.createTextNode("Read More");


  // set data to parent elements

  heading.appendChild(headingText);
  para.appendChild(paraText);
  btn.appendChild(btnText);

  box.style.backgroundColor = "#333";
  box.style.padding = "20px 30px";

  heading.style.color = "#fff";
  heading.style.textAlign = "center";
  heading.style.fontWeight = "bold";


  // parent box div set to 

  box.appendChild(heading);
  box.appendChild(para);
  box.appendChild(btn);

  root.appendChild(box);