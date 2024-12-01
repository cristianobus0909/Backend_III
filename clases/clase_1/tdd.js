// ✓ La función debe devolver null si algún
// parámetro no es numérico.
// ✓ La función debe devolver 0 si no se
// pasó ningún parámetro
// ✓ La función debe poder realizar la suma
// correctamente.
// ✓ La función debe poder hacer la suma
// con cualquier cantidad de números.


const suma = (a,b)=>{
    return a + b
}
let test1 = suma(10,20)

if (test1.a != Number) {
    console.log("Debe ingresar solo numeros");
    
    return null
}else{
    return console.log(test1);
    
}

//Refactorizar

// let numeros = [];
// const suma = (...numeros)=>{
//     if (numeros.length === 0) {
        
//     }
// }

