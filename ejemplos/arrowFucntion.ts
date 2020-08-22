(function saludar( ) {
    //Fución asignada a una variable, la ventaja de esta manera es que podemos cambiar let por const, y validar
    //la no sobreescritura de la funcion
   let miFucnion= function(a: string){
    return a
   }
   //Función tradicional
   function miFucnion2(a: string){
    return a
   }

   let miFuncionF= (a: string)=> a;
   /* 
   De esta forma, podemos hacer varias cosas:
   1: eliminar las llaves {} si el codigo a retornar es de una sola linea
   2: eliminar el return si el cógigo es de una sola linea
   3: 
   */
  const sumarF= (a: number, b: number) => a + b;
  console.log(sumarF(5, 100))

})();

