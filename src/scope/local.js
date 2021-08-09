const helloWorld =()=>{
    const hello = "hello Worklet";
    console.log(hello);
};

helloWorld();

console.log (hello); //Aqui no me dejara acceder 





//OTRO ejemplo
var scope = "Iam  global";
const functionScope =()=>{
    var scope = " iam just a local";
    const func =()=>{
        return scope;
    }
    consolee.log (func());
};

functionScope(); //resultado "i am just a local"
console.log(scope);  // resultado Iam global
