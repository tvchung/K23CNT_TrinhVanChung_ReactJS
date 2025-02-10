// array
var arr = [10,20,25,15];
// destructuring:
var [a,b]=arr; //=> a=10, b=20
console.log("a=",a);
console.log("b=",b);

[a,b,c] = arr;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

// object
const student = {
    name:"Chung Chung",
    age:47,
    phone:"0978611889",
    email:"chungtrinhj@gmail.com"
}

var {name,phone} = student;
// => name:"Chung Chung"; phone:"0978611889"
console.log("name:",name);
console.log("phone:",phone);

// ChatGPT 