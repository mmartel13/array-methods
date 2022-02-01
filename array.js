
const arr = [1,2,3,4,5,6,7,8]

arr.push(20) //adds something to the end of the array

console.log(...arr)

arr.push('mango') //adds something to the end of the array

console.log(...arr)

const lastElement = arr.pop() //removes the last element in the array

console.log(...arr)


let shift = arr.shift()  //removes the first element from the array/expensive bc has to shift every number once the first one is removed

console.log(...arr)

arr.unshift(11) //unshift adds it to the start of the array/also expensive for same reason as above
console.log(...arr) //...arr extracts the values and removes the commas to populate in terminal

