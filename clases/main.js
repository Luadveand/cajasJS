let cajas = require('./cajitas.js');
let caja = cajas.Caja;
let inventarios = require('./inventario.js')
let inventario = inventarios.Inventario

class Juego {
    constructor() {
        this.invent = new inventario();
    }
    startGame() {
        console.clear();
        let trigger = false
        let opt;
        console.log('Bienvenido a cajas! \n')
        do {
            console.log('Para jugar seleccione 1\nPara ver tu inventario seleccione 2\nPara salir seleccione 0 o presione ENTER')
            let prompt = require('prompt-sync')();
            let alt = prompt();
            opt = Number(alt)
            switch (opt) {
                case 0:
                    trigger = true
                    break;
                case 1:
                    console.clear();
                    const cajita = new caja();
                    const premio = cajita.obtenerPremio();
                    console.log('El premio es: ' + premio.nombre)
                    this.invent.addObject(premio)
                    console.log('')
                    break;
                case 2:
                    console.clear();
                    this.invent.showAll();
                    console.log('')
                    break;
                case 3:
                    console.clear();
                    this.invent.sellObject();
                    console.log('');
                    break;
                case 4:
                    console.clear();
                    this.invent.showMoney();
                    console.log('');
                    break;
            }
        }
        while (trigger !== true)
        this.invent.updateInventory();
    }
};

//inventTest();
const nuevoJuego = new Juego();
nuevoJuego.startGame();

