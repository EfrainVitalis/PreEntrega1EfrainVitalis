function enviarBienvenida(){
    const nombre = prompt('Ingresa tu nombre');
    alert('Bienvenido/a '+nombre);
}
enviarBienvenida();

let compra = prompt('Desea comprar uno de nuestros libros? 📚📕 (s-si)');
let total = 0;
while(compra.toLocaleLowerCase() == 's'){
    let libro = prompt('1 - Libro sobre comida italiana (italia y sus sabores) $1200\n2 - Libro sobre los sabores de america(La cocina de america) $1050\n3- Libro infantil (El libro de la Selva) $990\n4- Libro infantil (El principito)$670\n5-Telenovela (Harry Potter) $1500\n6- Telenovela (El señor de los anillos) $1300');
    switch(libro){
        case '1':
            alert('Agregaste a tu carro 🛒 el libro Italia y sus sabores $1200');
            agregarTotal(1200);
            break;
        case '2':
            alert('Agregaste a tu carro 🛒 el libro La cocina de america $1050');
            agregarTotal(1050);
            break;
        case '3': 
            alert('Agregaste a tu carro 🛒 el libro El libro de la selva $990');
            agregarTotal(990);
            break;
        case '4':
            alert('Agregaste a tu carro 🛒 el libro El principito $670');
            agregarTotal(670);
            break;
        case '5':
            alert('Agregaste a tu carro 🛒 el libro Harry Potter $1500');
            agregarTotal(1500);
            break;
        case '6':
            alert('Agregaste a tu carro 🛒 el libro El señor de los anillos $1300');
            agregarTotal(1300);
            break;
            default:
                alert('Codigo no existente');
            break;
    }
    compra = prompt('Desea comprar uno de nuestros libros? 📚📕 (s-si)');
}
alert('El monto total de su compra es $'+total);
function agregarTotal(precio){
    total = total + precio;
    alert('Costo total hasta el momento $'+total);
}