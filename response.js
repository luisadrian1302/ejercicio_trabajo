


function ResponderPreguntas(array){
    // Si un número es divisible por 3, reemplázalo con "Fizz".
    // Si un número es divisible por 5, reemplázalo con "Buzz".
    // Si un número es divisible por ambos (3 y 5), reemplázalo con "FizzBuzz".
    // Ejemplo 1
    // Entrada: [2, 3, 15, 5]
    // Salida: [2, "Fizz","FizzBuzz" , "Buzz"] 
    // Ejemplo 2
    // Entrada: [20, 30, 13, 2, 21]
    // Salida: ["Buzz", "FizzBuzz", 13, 2, "Fizz"] 

    // Tu trabajo es lo siguente, en las secciones de "aqui colocaras el elemento faltante" colocaras la logica para realizar el ejericio
    // puedes ayudarte de la seccion de checkresponses.js en la linea 13 hasta el 44

    // en este ejercicio necesitaras modificar el valor "newArray" y para modificarlo se hace con el siguente codigo:
    // newArray[i] = "valorAmodificar"; // este es un ejemplo de como modificar un array, en tu caso colocaras "Buzz", "FizzBuzz" o "Fizz", dependiendo el caso

    let newArray = [];

    //  --------------------------------------------------------------------------
    for (let i = 0; i < array.length; i++) {

        //   "aqui colocaras el elemento faltante"
      
        
    }

    // --------------------------------------------------------------------------
    return newArray;
}


function sumarNumeros(array){
    let nuevoArray = [];
    // sumar el numero de cada elemento por ejemplo si en un campo hay "132" debe de dar como resultado 6 debido a que 1 + 3 + 2 = 6
    // Ejemplo: 
    // Entrada: [123, 45, 89, 5]
    // Salida: [6, 9, 17, 5] // 1+2+3=6, 4+5=9, 8+9=17, 5=5
    // El ejercicio es simple, tienes que agregar la variable "valor" en la variable "nuevoArray" y eso simplemente seria el ejercicio
    //  --------------------------------------------------------------------------

    
    for (let i = 0; i < array.length; i++) {

        let valor = array[i].toString().split("").reduce( (acomulador, numero ) => acomulador + parseInt(numero), 0);    
        // aqui colocaras el elemento faltante
    }
    // --------------------------------------------------------------------------
    return nuevoArray;

}










