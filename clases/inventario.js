let objetos = require('./objeto.js');
let objeto = objetos.Objeto;
const fs = require('fs');
const { table } = require('console');
class Inventario{
    constructor() {
        this.arreglo = []
        try {
            const datos = fs.readFileSync('jsons/inventario.json', 'utf8')
            const objetos = JSON.parse(datos);
            for (var i = 0; i < objetos.length; i++)
                this.arreglo.push(new objeto(objetos.at(i).id, objetos.at(i).nombre, objetos.at(i).descripcion));
        } catch (err) {
            console.error(err)
        }
    }
    
    addObject (obj) {
        this.arreglo.push(obj);
    }

    updateInventory = () =>{
        const data = {}
        data.table = []
        for (let i = 0; i<this.arreglo.length; i++)
            data.table.push(this.arreglo.at(i))
        fs.writeFileSync('jsons/inventario.json', JSON.stringify(data))
    }

};

module.exports = {
    Inventario: Inventario
};