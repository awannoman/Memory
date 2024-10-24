// memory
    //   copy              //   reference
// Stack (Primitive) or Heap (Non-Primitive)
let myName = "noman"
let anotherName =  "myName"
// console.log(myName);
// console.log(anotherName)

let userOne = {
    email: "hjbsjbdh34bnn",
    upi: "jsdhjdghs"
}
let userTwo = userOne

userTwo.email = "jsjl12"
console.log(userOne);
console.log(userTwo);

