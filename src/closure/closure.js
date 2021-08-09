
//sin closure
const moneyBox = (coins)=>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log('MoneyBox: $'+ saveCoins);
}

moneyBox(5);  //aqui imprime $5
moneyBox(10);  //aqui imprime $10 


//aqui si se crea closure

const moneyBox =()=>{
    var saveCoins=0;
    const countCoins=(coins)=>{
        saveCoins += coins;
        console.log('MoneyBox: $'+ saveCoins);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4); //imprimio 4
myMoneyBox(6);  //imprimio 10, porque valia antes 6 y sumo este 6 + 4
myMoneyBox(10);  //imprimio 20, porque valia antes 10 y sumo 10 + este 10