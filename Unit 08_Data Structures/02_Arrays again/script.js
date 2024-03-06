const numbers = [];

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;

let numbersSorted = numbers.sort();
document.getElementById("sorted").innerHTML = numbersSorted;

const odds = numbers.filter(RemoveEvens);

document.getElementById("odd").innerHTML = odds;

function RemoveEvens(value, index, array) {
  if(value % 2 != 0)
  return value
}

//OR

//for(let i = 0; i < 10; i++){
  //let num = Math.floor(Math.random() * 10) + 1;
  //if(num % 2 !== 0){
  //  numbers.push(num)
  //}
  //numbers.push(num);
//}

// OR

//function filterOutEvens(numbers){
//  return number % 2 === 1
//}
