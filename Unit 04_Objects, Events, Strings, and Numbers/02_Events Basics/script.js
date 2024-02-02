<<<<<<< HEAD
function onClick(){
    document.getElementById("pic").hidden = true;
}

function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }
=======
function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hello Again"
}

function mouseOutHandler() {
    document.getElementById("kitties").hidden = false;
}

function keyDownHandler() {
    let x = 5
    let y = x + 7
    document.getElementById("demo").innerHTML = y
    
}

function keyUpHandler() {
    document.getElementById("kitties").hidden = true;
}
>>>>>>> d99e6f96bc0e55fd5fe5368b510bd8d9fe5bedde
