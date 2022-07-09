class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    obtenerApellido() {
        return this.apellido;
    }

    obtenerLibros() {
        return this.libros;
    }

    obtenerMascotas() {
        return this.mascotas;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({nombre,autor})
    }

    getBookNames() {
    let lista = [];
        this.libros.forEach(            
            titulo => lista.push(titulo.nombre)
        )
        return lista;
    }

}


const usuario1 = new Usuario('Martin', 'Bugao', [{ "nombre": 'La casa de Hojas', "autor": 'autor1'}, {"nombre": 'El Ritmatista', "autor": 'autor2'}], ['Moncho', 'Simon']);

console.log(usuario1.getFullName());

usuario1.addMascota('terry');
console.log(usuario1.obtenerMascotas());

console.log(usuario1.countMascotas());

usuario1.addBook('hola', 'mundo');

console.log(usuario1.obtenerLibros());

console.log(usuario1.getBookNames());