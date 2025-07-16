a= [1,2,3,4,5,6,]
// a.pop()
a.pop()
console.log(a)

b= [6,7,8,9,10]
console.log(b)
b.pop()
b.pop()
console.log(b)
c= [11,12,13,14,15]
console.log(c)
// c.pop()
c.push("Jordan")
console.log(c)
console.log(c.length)
console.log(c.shift())
c.shift()
console.log(c)

d=[ 16,17,18,19,20]
d.unshift("JPK")
console.log(d)

delete d[4]
console.log(d)
console.log(d.length)
console.log(d[4])

console.log(a.concat(b,c))