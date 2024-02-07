function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}

function roundDown(){
    let number = +document.getElementById("input1").value;

    let round = Math.floor(number);
    document.getElementById("result").innerHTML = round
}

function absoValue(){
    let number = +document.getElementById("input1").value;

    let absolute = Math.abs(number);
    document.getElementById("result").innerHTML = absolute;
}

function sin(){
    let number = +document.getElementById("input1").value;
    
    let sine = Math.sin(number);
    document.getElementById("result").innerHTML = sine;
}
