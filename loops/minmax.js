/**
 * Enunciado: 
 * 
 * Definir en un arreglo la edad de tres familiares.
 * Luego, obtener el que tenga la edad mínima y el que tenga la edad máxima, entre los tres familiares 
 */

// Declaramos los datos iniciales
const array = [3, 22, 15]
let minimum
let maximum

// Recorremos desde 0 hasta el largo de nuestro array
for(let index=0; index < array.length; index++) {
    // Almacenamos en una constante el elemento actual que se esta iterando en el for().
    const element = array[index]

    // Si es el primer elemento, almacenamos su valor en las variables minimum y maximum.
    // Esto con el fin de almacenar y poseer un valor inicial en ambas variables, 
    // para que luego en la siguiente iteración sean comparadas.
    if(index === 0) {
        minimum = element
        maximum = element
        continue // Usamos continue para ir a la siguiente iteración.
    // Si el elemento actual es menor a minimum, minimum es el elemento
    } else if (element < minimum) {
        minimum = element  
    // Si el elemento actual es mayor a maximum, maximum es el elemento
    } else if (element > maximum) {
        maximum = element    
    }
} 

// Mostramos los resultados
console.log('minimum', minimum)
console.log('maximum', maximum)
