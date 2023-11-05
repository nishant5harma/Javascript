
const myname=Symbol("Key1")
const user={
    name:"Shiva",
    "full name": "shiva sharma",
    age: 20,
    [myname]:'againname'
}



// console.log(user.name)
// console.log(user['full name'])
// console.log(user[myname])


user.greeting=function(){
    console.log(`hello ,${this.name}`)
}
console.log(user.greeting())