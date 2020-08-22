( () => {
        //Podemos definir el tipo de retorno, el tipo de dato que retornara si es correcto :Promise<number>
  const retirarDinero = (montoRetirar: number): Promise<number>=>{
      let dineroAcutal= 1000;

      return new Promise((resolve, reject)=>{
          if (montoRetirar > dineroAcutal){
              reject('No hay suficientes fondos');
          }else {
    //Forma larga   dineroAcutal = dineroAcutal - montoRetirar        
              dineroAcutal -= montoRetirar;
    /* Opcional */ resolve(dineroAcutal);  
          }
      });
  }

  retirarDinero( 1001 )
  //Ahora el montoActual ya tiene el tipo de dato number gracias a: Promise<number>
  //Esto nos ayuda por que al definir el tipo de dato, nos da acceso a los métodos de tipo number
  .then( montoActual => console.log(` Me quedan ${montoActual}`))
  .catch( err => console.warn(err))

})();

