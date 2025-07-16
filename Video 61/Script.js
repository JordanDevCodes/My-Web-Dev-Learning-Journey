// Create a faulty calculator using JavaScript

// This faulty calculator does following:
// 1. It takes two numbers as input from the user
// 2. It perfoms wrong operations as follows:


// + ---> -
// * ---> +
// - ---> /
// / ---> **


// It performs wrong operation 10% of the times

 let random = Math.random()
 console.log(random)
 let a = prompt("Enter Your First Number")
 let c = prompt("Enter Your Operator")
 let b = prompt("Enter Your Second Number")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random > 0.1)
{
     // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert (`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // Perform Wong Calculation
    
    c = obj[c]
    alert (`The result is ${eval(`${a} ${c} ${b}`)}`)
  
}