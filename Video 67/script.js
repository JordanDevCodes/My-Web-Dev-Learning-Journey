console.log(
    "Hello World"

)


console.log(document.body.childNodes)

console.log(document.body.childNodes[1].childNodes)


let cont =document.body.childNodes[1]
console.log(cont.firstChild)
console.log(cont.lastChild)

console.log(cont.firstElementChild)
console.log(cont.lastElementChild)

console.log(cont.lastElementChild.style.backgroundColor="red")
console.log(cont.lastElementChild.style.color="white")


// or

// cont.lastElementChild.style.backgroundColor = "red", cont.lastElementChild.style.color = "white";

// or

// let elem = cont.lastElementChild;
// elem.style.backgroundColor = "red";
// elem.style.color = "white";

 console.log(cont.lastElementChild.parentElement)
 console.log(cont.parentElement)
 console.log(document.body.firstElementChild.childNodes)
 console.log(document.body.firstElementChild.children)
 console.log(document.body.firstElementChild.children[0])
 console.log(document.body.firstElementChild.children[1])
 console.log(document.body.firstElementChild.children[3])
 console.log(document.body.firstElementChild.children[3].nextElementSibling)
 console.log(document.body.firstElementChild.children[3].previousElementSibling)
 console.log(document.body.firstElementChild.children[3].nextSibling)

 console.log(document.body.children)
 console.log(document.body.children[1])
 console.log(document.body.children[2])
 console.log(document.body.children[1].rows)
 console.log(document.body.children[1].nextElementSibling)
 console.log(document.body.children[1].nextSibling)
 