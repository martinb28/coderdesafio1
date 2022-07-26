const {promises: fs} = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }

    async save(obj) {

        try {
            let data = await fs.readFile(this.ruta);
            let products = JSON.parse(data);
            let maxId = (Math.max.apply(Math, products.map(function(o) {
                return o.id;
              })) + 1);
            obj.id = maxId;            
            products.push(obj);            
            fs.writeFile(this.ruta, JSON.stringify(products));

        } catch (error) {
            console.log('error al momento de guardar');
        }

    }
    async getById(id) {
        const products = await this.getAll();
        const productById = products.find(p => p.id == id);
        return productById;
    }
    async getAll() {
        try{
            const products = await fs.readFile(this.ruta, 'utf-8');            
            return JSON.parse(products);
        } catch(error){
            return [];
        }
    }
    async deleteById(id) {
        try {
            const products = await this.getAll();
            let productById = products.filter(x => x['id'] !== id);
            let newArray = JSON.stringify(productById);
            fs.writeFile(this.ruta, newArray);
        } catch (error) {
            console.log("No se pudo eliminar el ID solicitado");
        }
        
        
    }
    async deleteAll() {
        try {
            fs.writeFile(this.ruta, [])
        } catch (error) {
            console.log("No se pudieron eliminar los datos");
        }        
        
    }
}

module.exports = Contenedor;