// desestructurar de elementos
const obj = {
    name:"Carlos",
    age:25,
    country:"Bol",
};
let {name, ...all }=obj;
console.log(all);

// elementos de propagación

const obj = {
    name: 'Carlos',
    age:32,
}
const obj1 = {
    ...obj,
    country:"Bol",
    city:"Cochabamba",
}
console.log(obj1);
// promis. finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)                          // operacion ternaria
            ? setTimeout(() => resolve('Eres el puto amo'), 3000 )
            : reject(new Error('Test Error'))

    })
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finally the function'))

// Mejoras de Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //regex
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const days = match[3];

console.log(year, month, days, match);
