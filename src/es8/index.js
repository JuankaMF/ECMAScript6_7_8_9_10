// convertir en un arrray de Objetos
const data ={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana',   
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//object values
const data ={
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana'
}

const values = Object.values(data);
console.log(values);

// padend
const string ='hello';
console.log(string.padStart(8,'hi ')); // or padEnd

// Asinc Await
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve(`hello world`), 5000)
            : reject(new Error(`Test Error`))
    })
};
const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();
helloAsync();

const anotherFunction = async ()=>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};
anotherFunction();

//aquie se implemento trailing commas