const Contenedor = require('./contenedor');

async function main() {
    const product = new Contenedor('./productos.txt');

    //select all
    console.log('Muestro todos los productos');
    let allProducts = await product.getAll();
    console.log(allProducts);

    //select product by id
    const idToSearch = 1;
    console.log(`Muestro el producto con ID ${idToSearch}`)
    let productById = await product.getById(idToSearch);
    console.log(productById);    
    
    //delete all
    product.deleteAll()
    console.log('borrado exitoso')

    //delete by id
    const idToDelete = 1;
    console.log(`Elimino el producto con ID ${idToDelete}`)
    await product.deleteById(idToDelete);
    
    //save
    product.save({"title":"google", "price": 50, "thumbnail": "https://www.google.com.ar"});
    
}


main();