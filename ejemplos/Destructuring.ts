( () => {
//Objeto
const avenger={
    nombre: 'steve',
    poder: 'fuerza',
    clave: 'Cap'
}
//Objeto
const {nombre, poder, clave} = avenger;
console.log(nombre);
console.log(poder);
console.log(clave);

//Argumento
const extraer= (avenger: any)=>{
    const {nombre, poder, clave}= avenger;
    console.log(nombre);
    console.log(poder);
    console.log(clave);
}
/* extraer(avenger); */

//Destructuring en el propio argumento
const extraer2= ( {nombre, poder}: any )=>{
    console.log(nombre);
    console.log(poder);
}
/* extraer2(avenger); */

//En arreglos, forma antigua
const avengers: string[]= ['thor', 'ironman', 'spiderman'];
/* const [martillo, robot, arañas]= avengers; */
/* console.log(martillo);
console.log(robot); */

//Tambien podermos extraer los elementos del array en una funcion con destructuring
const extraerArray = ( [thor, iroman, spider]: string[] ) =>{
    console.log(thor);
    console.log(iroman)
}


})();

