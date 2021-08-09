const buildCount =(i)=>{
    let count =i;
    const displayCount = ()=>{
        console.log(count++);
    };
    return displayCount;
};

const myCount= buildCount(1); 
myCount(); //imprime 1
myCount();  //imprime 2

const myOtherCount = buildCount(10);
myOtherCount(); //imprime 10
myOtherCount(); //imprime 11
