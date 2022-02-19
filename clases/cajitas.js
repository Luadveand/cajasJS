let objetos = require('./objeto.js');
let objeto = objetos.Objeto;
const fs = require('fs');
class Caja {
    constructor() {
        this.arreglo = []
        try {
            const datos = fs.readFileSync('jsons/objetos.json', 'utf8')
            const objetos = JSON.parse(datos);
            for (var i = 0; i < objetos.length; i++)
                this.arreglo.push(new objeto(objetos.at(i).id, objetos.at(i).nombre, objetos.at(i).descripcion, objetos.at(i).precio));
        } catch (err) {
            console.error(err)
        }
    }
    getRandomN(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    obtenerPremio() {
        let dado = this.getRandomN(1, 100);
        let premio;
        if (dado <= 60) premio = this.getRandomN(0, 5)
        else if (dado > 60 && dado <= 80) premio = this.getRandomN(5, 10)
        else premio = this.getRandomN(10, 15)
        //console.log("Tu premio es: " + this.arreglo.at(premio).nombre)
        return this.arreglo.at(premio)
    }
}

module.exports = {
    Caja: Caja
};