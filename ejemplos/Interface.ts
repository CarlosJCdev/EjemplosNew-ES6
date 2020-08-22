( () => {
      
    //Manera dificil de mantener
    const enviarMision = ( soldier: Soldier)=>{
        console.log(`Enviar a ${soldier.nombre} a la misión`);
    }
    const Ryan: Soldier={
        nombre: 'ryan',
        edad: 25
    }
    enviarMision(Ryan);

    //Con Interfaces
    interface Soldier{
        nombre: string;
        edad: number;
    }

})();

