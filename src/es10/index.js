let array =[1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value **2, value]));

// trimstart

let hello ='          hello world     ';
console.log(hello);
console.log(hello.trim());
// Opcional Error
 try{
 } catch(error/opcional){
 }

let obj = [['name','Oscar'], ['age',32]];
console.log(Object.fromEntries(obj));

let mySymbol = 'My Symbol Es toda una Belleza';
let symbol = Symbol(mySymbol);
console.log (symbol.description);

