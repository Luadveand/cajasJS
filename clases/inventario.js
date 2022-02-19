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
            //console.error(err)
        }
    }
    
    addObject (obj) {
        this.arreglo.push(obj);
        //console.log(obj.nombre)
    }

    updateInventory = () => {
        //const data = {}
        const data = []
        for (let i = 0; i<this.arreglo.length; i++)
            data.push(this.arreglo.at(i))
        fs.writeFileSync('jsons/inventario.json', JSON.stringify(data))
    }

    showInvPos = (num) => {
        if (this.arreglo.at(num) === undefined) return 'no existe' 
         else return this.arreglo.at(num).nombre
    } 
    
    mostrarTodos(){
        for (let i = 0; i<this.arreglo.length; i++){
            if (this.arreglo.at(i) === undefined) console.log('no existe')
            else console.log(this.arreglo.at(i))
        }
            
    }

};

module.exports = {
    Inventario: Inventario
};