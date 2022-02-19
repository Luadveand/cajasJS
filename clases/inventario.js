let objetos = require('./objeto.js');
let objeto = objetos.Objeto;
const fs = require('fs');
const { table } = require('console');
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
            console.error(err)
        }
    }

    updateInventory = () => {
        const data = []
        for (let i = 0; i < this.arreglo.length; i++)
            data.push(this.arreglo.at(i))
        fs.writeFileSync('jsons/inventario.json', JSON.stringify(data))
    }

    addObject(obj) {
        this.arreglo.push(obj);
    }

    showInvPos = (num) => {
        if (this.arreglo.at(num) === undefined) return 'no existe'
        else return this.arreglo.at(num).nombre
    }

    mostrarTodos() {
        if (this.arreglo.length === 0) console.log('No hay objetos')
        else {
            for (let i = 0; i < this.arreglo.length; i++) {
                console.log(i + 1 + '. ' + this.arreglo.at(i).nombre)
            }
        }
    }

    sellObject(num){
        if (this.arreglo.length === 0) console.log('No hay objetos')
        else  {
            if (num > this.arreglo.length) 
            else {
                 
            }
        }
        
    }

};

module.exports = {
    Inventario: Inventario
};