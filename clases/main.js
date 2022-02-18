let cajas = require('./cajitas.js');
let caja = cajas.Caja;

function startGame(){
    const prompt = require('prompt-sync')();
    let opt;
    do{
        console.log('Bienvenido a cajas! \n Para jugar seleccione 1 \n Para salir seleccione 0')
        let prompt = require('prompt-sync')();
        let alt = prompt();
        opt = Number(alt)
        
        switch(opt){
            case 0:
                opt = 1;
                break;
            case 1:
                let cajita = new caja();
                cajita.obtenerPremio();
                break;
        }
    }

    while (opt !== 1)
    
    
}

startGame();

