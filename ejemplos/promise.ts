( () => {

    console.log('inicio');

    const prom1 = new Promise( (resolve, reject )=>{
        setTimeout(()=>{
           /*resolve */ reject('Se termino el timeout');
        }, 1000)
    });
        //Usamos then si fue exitoso/ correcta la ejecución
    prom1.then( mensaje => console.log(mensaje))
    .catch(err => console.warn(err));

    console.log('fin');


})();

