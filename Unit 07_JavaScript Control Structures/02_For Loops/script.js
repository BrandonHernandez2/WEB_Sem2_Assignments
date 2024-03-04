const things = {thing1:"pencil", thing2:"paper", thing3:"eraser"}; 

let txt = "";
for (let x in things) {
  txt += things[x] + ", ";
}

document.getElementById("Stuff").innerHTML = txt;