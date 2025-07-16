console.log(
    "Hello World"

)


console.log(document.body.childNodes)

console.log(document.body.childNodes[1].childNodes)


let cont =document.body.childNodes[1]
console.log(cont.firstChild)
console.log(cont.lastChild)

console.log(cont.firstElementChild)

console.log(cont.lastElementChild.style.backgroundColor="red",color=-"white")
console.log(cont.lastElementChild.style.color="white")


// or

// cont.lastElementChild.style.backgroundColor = "red", cont.lastElementChild.style.color = "white";

// or

// let elem = cont.lastElementChild;
// elem.style.backgroundColor = "red";
// elem.style.color = "white";

