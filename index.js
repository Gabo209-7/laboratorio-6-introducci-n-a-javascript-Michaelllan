// =========================================
// 🚇 SISTEMA DE VENTA DE TICKETS DEL METRO
// =========================================

// Precio base de un ticket
const PRECIO_BASE = 0.50;

// =========================================
// PASO 1: CREAR ARRAY DE CLIENTES
// =========================================

// TODO: Crea un array con 6 objetos de clientes
// Cada objeto debe tener: nombre (string), edad (number), tickets (number)
// Incluye clientes de diferentes edades para cubrir todas las categorías:
// - Al menos 2 menores de 18 años (50% descuento)
// - Al menos 2 mayores de 65 años (30% descuento)  
// - Al menos 2 adultos entre 18-64 años (sin descuento)

const clientes = [
    { nombre: "Pablo Pérez", edad: 15, tickets: 2 },     // Menor
    { nombre: "María López", edad: 70, tickets: 1 },     // Mayor
    // TODO: Agrega 4 clientes más siguiendo esta estructura
    { nombre: "Ibeth Lopez", edad: 40, tickets: 4 }, // Mayor
    { nombre: "Jose Vila", edad: 33, tickets: 10 },
    { nombre: "Carlos Villagran", edad: 80, tickets: 11 },
    { nombre: "Homero Simpson", edad: 13, tickets: 6 }, // Menor 
    // Asegúrate de incluir: 1 menor más, 1 mayor más, y 2 adultos (18-64 años)
];


// =========================================
// PASO 2: PROCESAR CLIENTES
// =========================================

console.log("========================================");
console.log("  SISTEMA DE TICKETS DEL METRO");
console.log("========================================\n");


// TODO: Crea un bucle for que recorr el array 'clientes'
for (let i = 0; i < clientes.length; i++) {
    
    // TODO: Paso 1 - Obtén los datos del cliente actual
    let cliente = clientes[i];
    let nombre = cliente.nombre;
    let edad = cliente.edad;
    let cantidadTickets = cliente.tickets;
    
    // TODO: Paso 2 - Calcula el precio sin descuento
    let precioSinDescuento = PRECIO_BASE * cantidadTickets; 
    
    // TODO: Paso 3 - Calcula el descuento según la edad
    let descuento = 0;
    if (edad < 18) {
        descuento = 0.50;
    }
    else if (edad >= 65) {
        descuento = 0.30;
    }

    // TODO: Paso 4 - Calcula el precio con descuento
    let precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);
    
    // TODO: Paso 5 - Muestra el reporte del cliente
    console.log("Cliente: " + nombre);
    console.log("Edad: " + edad + " años");
    console.log("Tickets: " + cantidadTickets);
    console.log("Precio sin descuento: $" + precioSinDescuento.toFixed(2));
    console.log("Descuento aplicado: " + (descuento * 100) + "%");
    console.log("Precio con descuento: $" + precioConDescuento.toFixed(2));
    console.log("----------------------------------------\n");
}


// =========================================
// EXPORTAR (para las pruebas)
// =========================================
module.exports = { clientes, PRECIO_BASE };