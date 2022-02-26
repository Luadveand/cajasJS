let objetos = require('./objeto.js');
let objeto = objetos.Objeto;
const fs = require('fs');
class Inventario {
    constructor() {
        this.monedero = 100
        this.arreglo = []
        try {
            const datos = fs.readFileSync('jsons/inventario.json', 'utf8')
            const objetos = JSON.parse(datos);
            for (var i = 0; i < objetos.length; i++)
                this.arreglo.push(new objeto(objetos.at(i).id, objetos.at(i).nombre, objetos.at(i).descripcion, objetos.at(i).precio));
        } catch (err) {
            //console.error(err)
        }
    }

    updateInventory = () => {
        //const data = {}
        const data = []
        for (let i = 0; i < this.arreglo.length; i++)
            data.push(this.arreglo.at(i))
        fs.writeFileSync('jsons/inventario.json', JSON.stringify(data))
    }

    addObject(obj) {
        this.arreglo.push(obj);
        //console.log(obj.nombre)
    }

    showInvPos(num) {
        if (this.arreglo.at(num) === undefined) console.log('no existe')
        else return this.arreglo.at(num).nombre
    }

    showAll() {
        if (this.arreglo.length === 0) console.log('No hay objetos')
        else {
            for (let i = 0; i < this.arreglo.length; i++) {
                console.log(i + 1 + '. ' + this.arreglo.at(i).nombre)
            }
        }
    }

    sellObject() {
        if (this.arreglo.length === 0) {
            console.log('No hay objetos')
        }
        else {
            console.log('Qué articulo desea vender?')
            this.showAll()
            let prompt = require('prompt-sync')();
            let alt = prompt();
            let opt = Number(alt)
            if (this.arreglo.at(opt-1) === undefined || opt === 0) console.log('no existe')
            else {
                this.monedero = this.monedero + Number(this.arreglo.at(opt-1).precio);
                console.log('El articulo '+this.arreglo.at(opt-1).nombre + ' ha sido vendido y tienes un total de '+ this.monedero + ' monedas')
                this.arreglo.splice(opt-1, 1);
            }
        }
    }

    showMoney() {
        console.log('Tienes ' + this.monedero + ' monedas')
    }

};

module.exports = {
    Inventario: Inventario
};