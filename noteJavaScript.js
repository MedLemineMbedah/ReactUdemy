////////////////////////////////////////////Void Function Type///////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++Void Function Type++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
function printMyName(name){
    console.log(name);
}

printMyName("lemine");
///////////////////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const printMyName1 = () =>
{
    console.log("lemine2");
}
printMyName1();


///////////////////////////////////////////Function with param type///////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++Function with param type++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const printMyNameConst = (name) =>
{
    console.log(name);
}
printMyNameConst("2th syntaxe");

///////////////////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const printMyNameConst3 = name =>
{
    console.log(name);
}
printMyNameConst3("3th syntaxe");

///////////////////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const printMyNameConst4 = (name,id) =>
{
    console.log(name,id);
}
printMyNameConst4("4th syntaxe",4);


////////////////////////////////////////// Return Type/////////////////////////////////////////////////////////////////
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++Return Type+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const multiplication= (num) =>
{
   return num * 2;
}
console.log("multiplication(4) = " + multiplication(4));
//////////////////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const multiplication2= (num) => num * 2;

console.log("multiplication2(4) = " + multiplication2(4));


//////////////////////////////////////////////////////////////////////Classes////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Classes/////////////////////////////////////////////");
class Humain {
    constructor(){
        this.gen = 'male';
    }
    printGen(){
        console.log(this.gen);
    }
}

class Person extends Humain{
    constructor(){
        super();
        this.name = 'Mohamed lemine';
        //this.gen= 'change gen';
    }
    printMyName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printGen();
/////////////////////////////////////////////////////////////////////Next JavaScript Generation (ES6/Bble)/////////////////////////////////////////////
console.log("++++++++++++++++++++++++++Next JavaScript Generation (ES6/Bble)/////////////////////////////////////////////");
class HumainNext{
    
    gen = 'male';
    
    printGen = ()=>{
        console.log(this.gen);
    }
}

class PersonNext extends HumainNext{
    
    name = 'Mohamed lemine';
    gen= 'change gen';
    
    printMyName = () =>{
        console.log(this.name);
    }
}
const personNext = new PersonNext();
person.printMyName();
person.printGen();
/////////////////////////////////////////////////////////////Spread & Rest operator////////////////////////////////////////
console.log("+++++++++++++++++++++++++++++++++++++++++Spread & Rest operator++++++++++++++++++++++++++++++++++++++++++++");
const numbes = [1,2,3];
const newNumber = [...numbes,4]; //add new element
console.log(newNumber);

const newListInsideNumbers = [numbes,4]; //add new list
console.log(newListInsideNumbers);

const person2 = {
    name: 'lemine'
};

const newPerson2 ={
    ...person2,
    age:27
};
console.log(newPerson2);

/////////fliter
const filter = (...args) => {
        return args.filter(el => el ===1); // filter if element ==1 in the args paramators
}
console.log("Fliter Result: "+ filter(3,2,1));

////////////////////////////////////////////////////////////////////////Destructuring/////////////////////////////////////////
const numbersDes = [1,2,3];
[num1,,num3] =numbersDes; //array destraction
console.log("Array Destraction : " + num1,num3);

/////////////////////////////////////////////////////////////////////////Reference and Primitive Type Refresher//////////////////////////////
const personRef = {
    name : 'Max'
};
const secondPerson = {...personRef};//=personRef (pour pointer secondPerson sur personRef),{...personRef} pour copier leur valeur seulement
personRef.name = 'Min';
console.log(secondPerson);

/////////////////////////////////////////////////////////////////////////Refreshing Array Functions//////////////////////////////
const numbers = [1,2,3]; //Array
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);