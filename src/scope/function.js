const fruits = ()=>{
    var fruit = 'apple';
    console.log (fruit);
};


fruits();
console.log(fruit);


//otra funcion, es una funcion con variables locales.

const anotherFunction=()=>{
    var x = 1;
    var x = 2;
    let y = 1;  //aqui no me dejara porque esta usando let
    let y = 2 ;
    console.log(x);
    console.log(y);
}

anotherFunction();