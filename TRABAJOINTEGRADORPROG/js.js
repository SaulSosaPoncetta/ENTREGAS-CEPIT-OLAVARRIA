/* let arr=[0,1,2,3];
arr.forEach(function(params) {
    console.log();
});


const persona={
    "nombre":"jose",
    "edad":35,
    "dni":24428844
}

console.log(persona.dni)

let prod=["arroz","papa"];
let stock=[8,20];
let precio=[1500,4000];

for(let i= 0; i < prod.length; i++) {
    console.log("Del producto" + prod[i]+ "tengo"+ stock[i]+ "unidades que valen c/u$"+ precio[i]);
}*/
/*
const producto={
    "nombre":"arroz",
    "cantidad":20,
    "precio":1500
}

console.log("Del producto " + producto.nombre + " tengo "+ producto.cantidad + " unidades que valen c/u $ " + producto.precio);
*/

// arreglo de json 
const producto=[{
    "nombre":"arroz",
    "cantidad":20,
    "precio":1500
},{
    "nombre":"papa",
    "cantidad":20,
    "precio":4000
},{
    "nombre":"limon",
    "cantidad":40,
    "precio":200
}]


let papa=[{
    "nombre":"papa",
    "cantidad":20,
    "precio":4000
}]

producto.push(papa);

console.log(producto);