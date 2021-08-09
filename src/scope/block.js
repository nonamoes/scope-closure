const fruits= ()=>{
    if(true){
        var fruits1='apple';
        let fruits2= 'banana'; //esto no me lo imprimira
        const fruits3= 'kiwi'; // esto no podre a acceder
    }
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

//llamado de la funcion

fruits();


// aqui para que el scope si de acceso a las variables cambiamos el console.log

const fruits= ()=>{
    if(true){
        var fruits1='apple';
        let fruits2= 'banana';
        const fruits3= 'kiwi';  
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
  
}

//llamado de la funcion

fruits();



let x = 1;
{
    let x = 2;
    console.log(x); //aqui imprimira el 2
}
console.log(x); //aqui imprime el 1

//si probamos el ejemplo de arriba peor con VAR imprimira x=2 en ambos consoles

var x = 1;
{
    var x = 2;
    console.log(x); //aqui imprimira el 2
}
console.log(x); //aqui imprime el 1

//fin

//si en este for le pongo var a i saldra 100 veces impreso el 10, si pongo tipo let, sera del 0 al 9 el resultado)
const anotherFunction=()=>{
    for (let i=0; i<10; i++){ //aqui antes decia var en vez de let
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
};

anotherFunction();