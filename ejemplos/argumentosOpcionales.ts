(function saludar( ) {
    function activar( 
        quien: string,
        momento? : string,
        objeto: string = 'señal'
         ){
           if(momento){
               console.log(` ${quien} activó la ${objeto} en la ${momento}`)
           }  else{
            console.log(` ${quien} activó la ${objeto}`)
           }

    }

    activar( 'gordon', 'tarde' );

})();

