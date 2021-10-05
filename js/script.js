const para = document.createElement("p");
const node = document.createTextNode("this ia new paragraph.");

para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);