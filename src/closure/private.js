const person = ()=>{
    var saveName = "Name";
    return{
        getName: ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name;
        },
    };
};

newPerson = person();
console.log (newPerson.getName()); //imprime Name
newPerson.setName('Natalia');
console.log(newPerson.getName()); //imprime Natalia