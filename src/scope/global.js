var hellow = 'Hello';
let world = 'Hello world';
const helloWorld = 'Hello Wolrd!';

console.log(hellow);

const anotherFunction = ()=>{
    console.log(hellow);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Mala practica
// const helloWorld=()=>{
//     globalVar = "i am global";
// }

// helloWorld();
// console.log(globalVar);

const anotherFunction =() =>{
    var localVar = globalVar = 'iam global';
}

anotherFunction();
console.log(globalVar);