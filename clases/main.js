let cajas = require('./cajitas.js');
let caja = cajas.Caja;
let inventarios = require('./inventario.js')
let inventario = inventarios.Inventario

class Juego{
    constructor(){
        this.invent = new inventario();
    }
    startGame () {
        const prompt = require('prompt-sync')();
        let trigger = false
        let opt;
        do{
            console.log('Bienvenido a cajas! \n Para jugar seleccione 1 \n Para salir seleccione 0')
            let prompt = require('prompt-sync')();
            let alt = prompt();
            opt = Number(alt)
            
            switch(opt){
                case 0:
                    trigger = true
                    break;
                case 1:
                    let cajita = new caja();
                    this.invent.addObject(cajita.obtenerPremio())
                    //this.invent.mostrarTodos();
                    this.invent.updateInventory();
                    trigger = true
                    break;
                case 2:
                    
                    trigger = true
            }
        }
        while (trigger !== true)
    }
};

//inventTest();
const nuevoJuego = new Juego();
nuevoJuego.startGame();

