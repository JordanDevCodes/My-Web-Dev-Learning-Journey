function nice(name)
{
console.log("Hey " + name + " You are nice")
console.log("Hey " + name + " You are Good")
console.log("Hey " + name + " Your tshirt is nice ")
console.log("Hey " + name + " You are Very good")

}

nice("Jordan")


function sum( a,b, c = 3)
{
    // console.log(a+b)

    console.log(
        a,b,c
    )
    return a+b+c

}

// result1 = sum(3, )
result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)



const func1 = (x)=>{
    console.log("I am an aroow function", x)

}

func1(34);
func1(88);
func1(94);
func1(4);