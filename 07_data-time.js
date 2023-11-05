let date=new Date('11-01-2023')
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleDateString())



// Using toLocaleString with options
const formattedDate = date.toLocaleString('default', {
    month:'numeric'
  });
  console.log(formattedDate); // Output: 01/05/2023
  