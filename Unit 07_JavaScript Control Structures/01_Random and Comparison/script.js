function Roll(){
    var diceElement = document.getElementById("dice");
    // diceElement.src = "images/dice1.jpg";
    let random = Math.random() * 6 + 1;
    random = Math.trunc(random);
    // console.log(random);

    if(random === 1){
        diceElement.src = "dice1.png"
    }
    else if(random === 2){
        diceElement.src = "dice2.png"       
    }
    else if(random === 3){
        diceElement.src = "dice3.png"
    }
    else if(random === 4){
        diceElement.src = "dice4.png"
    }
    else if(random === 5){
        diceElement.src = "dice5.png"        
    }
    else if(random === 6){
        diceElement.src = "dice6.png"
    }
}
    function RollSwitch(){
        var diceElement = document.getElementById("diceSwitch");
        let random = Math.random() * 6 + 1;
        random = Math.trunc(random);

        switch(random){
            case 1:
                diceElement.src = "dice1.png"
                break;
            case 2:
                diceElement.src = "dice2.png"
                break;
            case 3:
                diceElement.src = "dice3.png"
                break;
            case 4:
                diceElement.src = "dice4.png"
                break;
            case 5:
                diceElement.src = "dice5.png"
                break;
            case 6:
                diceElement.src = "dice6.png"
        /// And So on
        }
    }
