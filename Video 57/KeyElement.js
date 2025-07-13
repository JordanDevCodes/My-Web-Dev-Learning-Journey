
let obj ={
    name: "Jordan",
    role: "programer",
    company: "Jpk",
 }
 
 
for (const key in obj) {
  
        const element = obj[key];
        console.log(key, element)
    
}

let obj2 ={
    Name: "Jordan2",
    Role: "programer2",
    Company: "Jpk2",
 }
 
 
for (const key in obj2) {
  
        const element = obj2[key];
        console.log(key)
    
}


let obj3 ={
    name: "Jordan3",
    role: "programer3",
    company: "Jpk3",
 }
 
 
for (const key in obj3) {
  
        const element = obj3[key];
        console.log(element)
    
}


for (const J of "Jordan") {
    console.log(J)
    
}

