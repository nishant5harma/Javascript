 const arr=new Array(4,5,21,11,44,90)
//  console.log(arr)
//  arr.push(33)
//  console.log(arr)

// pop = remove last value from the array

// unshift = add value at starts and shift all the value

// console.log('Original Array',arr)
// console.log('Slice', arr.slice(1,3))
// console.log('After slice', arr)
// console.log('Splice',arr.splice(1,3))
// console.log('Arrya changed',arr)


// Array 2 -----------------------x-------------------------------------x


arry1=['acer','samsung']
arry2=['mi','apple']

//  ...arry1,...arry2 //= spread operator
// to join use concate method or spread operator

const arr3=[...arry1, ...arry2]
console.log(arr3)

// isArray => to check it is array or not
// Array.from => convert it into array

console.log(Array.isArray('Nishant'))
console.log(Array.from('Nishant'))

// convert multiple values into an array use= [Array.of]    