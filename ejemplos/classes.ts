( () => {
                //ESTA FORMA ES MAS COMPLICADA Y SE PUEDE REFACTORIZAR UN POCO
/*  class Avenger{
     //A qui nos falta inicializar las propiedades una a una, o podemos realizarlo con un constructor
     nombre: string;
     equipo: string;
     nombreReal: string;
     puedePelear: boolean;
     peleasGanadas: number;

     //El constructor se inicializa cuando se realiza una nueva instancia de la clase
     constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean, peleasGanadas: number){
        this.nombre= nombre;
        this.equipo= equipo;
        this.nombreReal= nombreReal;
        this.puedePelear= puedePelear;
        this.peleasGanadas= peleasGanadas;
     }
 } 
      const spiderMan= new Avenger('SpiderMan', 'marvel');
        console.log(spiderMan);
 */




                        //FORMA MAS SIMPLIFICADA DEL USO DE LAS CLASES
 class Avenger{
    //A qui nos falta inicializar las propiedades una a una, o podemos realizarlo con un constructor
    /* nombre: string;
    equipo: string;
    nombreReal: string;
    puedePelear: boolean;
    peleasGanadas: number; */

    //Con public podemos acceder a la propiedad tanto dentro y fuera de la clase
    //Al definir los parametros en la instancia debemos pasar estrictamente todos los datos,
    //Pero podemos modificar algunos elementos y hacerlos no requeridos, o de plano definirlos
    constructor(
        public nombre: string,
        public equipo: string,
        public nombreReal?: string,
        public puedePelear?: boolean,
        public peleasGanadas: number =0
    ){}
    }
 const spiderMan= new Avenger('SpiderMan', 'marvel');
 console.log(spiderMan);

})();

