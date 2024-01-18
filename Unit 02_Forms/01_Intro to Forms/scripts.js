function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    document.getElementById("demo").innerHTML = x;
    if(x == ""){
        alert("Name must be filled out.")
        return false;
    }
}