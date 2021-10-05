var divi = document.createElement("div");
divi.id = "div1";
document.getElementsByTagName("body")[0].appendChild(divi);
//lisätään 1 kappelet div#div1 sisään
var para = document.createElement("p");
para.id = "para1";
var node = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sit laudantium, consequuntur unde nisi nihil molestiae reiciendis repudiandae incidunt, eius eveniet debitis ipsa? Adipisci, cupiditate dolore quasi cum ad temporibus.");
para.appendChild(node);
document.getElementById("div1").appendChild(para);

//lisätään 2 kappelet div#div1 sisään
var para = document.createElement("p");
para.id = "para2";
var node = document.createTextNode("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus sit laudantium, consequuntur unde nisi nihil molestiae reiciendis repudiand.");
para.appendChild(node);
document.getElementById("div1").appendChild(para);

// lisätään kolmas kappale 
var para = document.createElement("p");
para.id = "p3";
var node = document.createTextNode("lisää teskstiä ...dkk");
para.appendChild(node);
document.getElementById("div1").appendChild(para);
/*var para = document.createElement("p");
var node = document.createTextNode("Tämä on kappaleen teksti");
para.appendChild(node);

document.getElementsByTagName("body")[0].appendChild(para);*/