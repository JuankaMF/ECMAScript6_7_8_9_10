function newFunction(name, age, country){
    var name = name || 'Carlos';
    var age = age || 19;
    var country =country || "Bolivia";
    console.log(name + age + country);
}

// es6

function newFunction2(name="Carlos", age = 19, country="Bol"){
    console.log(name +" " + age +' ' + country);
}

newFunction2();
newFunction2('Juan', 29, 'Bras');

// tenplet literal 

let hello= "hello"
let world = "world"
let epicPhrase = hello + " " + world
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}` //es6
console.log(epicPhrase2)

// multilinea en los strings
let lorem = "La herramienta para controlar \n versiones es git\n"
let lorem2 = `Tengo que invertigar que es Laraver
y no tengo porque precuparme de los saltos 
de linea
`  // es6
console.log(lorem);
console.log(lorem2);

// estructuracion de elementos

let person={
    'name':'Carlos',
    'age':25,
    'nickname':'Juanka'
}
console.log(person.age, person.name);

let {name, age} = person; //es6
console.log(name, age);

// Operados de propagacion

let team1 = ['oscar', 'carlos', 'ricardo', 'jode'];
let team2 = ['Maria', 'juliana', 'roberta', 'antonia'];

let education = ['Adaluz', ...team1, ...team2]; //es6

console.log(education);

// var =>> let
{
    var globalvar = "Global var"; // resalta en bloques
}
{
    let globalet = "Global let"; 
    console.log(globalet); 
}
console.log(globalvar);

// cost

const a = "b"; // costante

// Objeto

let name='Carlos';
let age=20;

const crearObjeto = (name,age) =>{
    return{
        name:name,
        age:age,
        saludar:() =>{
            return `Hello babys`
        }
    }
}
console.log(crearObjeto("carlos", 25));


const crearObjeto = (name,age) =>{   //es6
    return{
        name,
        age,
        saludar(){
            return `Hola cara navos`
        }
    }
}   
let Juanka = crearObjeto('Carlos',25);
console.log(Juanka.saludar());
// arrow function

const names=[
    {name:'Carlos', age:20},
    {name:'Adaluz', age:21}
]
let number=[1,2,3,4,5,6,7,8,9,10];

let listOfNumbers = number.map(function (item) {
    return item * item; 
})
console.log(listOfNumbers);

let lisOfNames2 = names.map(item => console.log(item.name)); //es6

let listOfNumbers2 = number.map(item => item*item); //es6
console.log(listOfNumbers2);
let numberFilters=number.filter(item => item%2 == 0); //es6
console.log(numberFilters);


const listOfNames3 = (name, age) =>{ //es6
    console.log(name + age);
}
listOfNames3("carlos", 20);



const listOfNames4 = name =>{ //es6
    console.log(name);
}
listOfNames4("carlos");


const square = num =>num * num; //es6
let valor = square(3);
console.log(`La raiz cuadrada es ${valor}`);

// Promesa de ecmascript 6
const helloPromise = () =>{                     //es6
    return new Promise((resolve, rej
        ect) => {
        if(true){
            resolve('Hey!');
        } else{
            reject('Ups!');
        }
    })
}

helloPromise()                             
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(response => console.log(response));
// Clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    restar(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
    //etcetera
}
const cal = new calculator();
console.log(cal.sumar(6,3));
// importar una modulo
import { hello } from './module.js';

console.log(hello());

// Generadores

function* helloWorld(){
    if(true){
        yield "Hello, ";
    }
    if(true){
        yield "Word, ";
    }
    
    if(true){
        yield "Carlos eres el puto amo ";
    }
}
const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

