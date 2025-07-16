let arr=[1,3,5,7,11,13,15,17,19]
// let newArr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     newArr.push(element**2)

    

// }

// simple way given below

let newArr=arr.map((e, index, arr)=>{
    return e**2
})


console.log(newArr)



const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanseven))


let arr2= [1,2,3,4,5,6]
const red = (a,b)=>{
    return a*b
    // return a+b
}

console.log(arr2.reduce(red))


Array.from("Jordan")
console.log(Array.from("Jordan"))