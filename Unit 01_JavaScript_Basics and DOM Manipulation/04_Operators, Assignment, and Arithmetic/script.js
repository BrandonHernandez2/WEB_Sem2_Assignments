let N1 = prompt("Please Enter a Number: ")
let N2 = prompt("Please Enter Another Number: ")

N1 = +N1
N2 = +N2

sum = N1 + N2;
dif = N1 - N2;
prod = N1 * N2
quo = N1 / N2
mod = N1 % N2

document.getElementById("sum").innerHTML = "The sum of the numbers is: " + sum;
document.getElementById("dif").innerHTML = dif;
document.getElementById("prod").innerHTML = prod;
document.getElementById("quo").innerHTML = quo;
document.getElementById("mod").innerHTML = mod;
