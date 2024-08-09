// Declare a variable that stores an array of any 3 fictional people
let fiction = ["robin","flash","spiderman","batman"]
// Console log the first element of the array (using array name and index)
console.log(fiction[0])
// Console log the last element of the array (using array name and index)
console.log(fiction[3])
// Console log the last element of the array WITHOUT using the index -- use the array length instead
console.log(fiction.length)
console.log(fiction[fiction.length - 1])
// Change the second element of the array to be a different fictional character
fiction[2] = "wonder woman"
// Stretch: try ADDING a new fictional character to the array
fiction.push("aquaman")

console.log(fiction)