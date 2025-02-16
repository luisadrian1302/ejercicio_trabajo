

   
   

    for (let u = 0; u < array.length; u++) {

        if (array[u] % 5 == 0 && array[u] % 3 ==0) {
            
            array[u] = "FizzBuzz";
        }else if( array[u] % 5 == 0 ){
    
            array[u] = "Buzz";
    
        }else if(array[u] % 3 == 0){
            array[u] = "Fizz";
        }
        
    }


    for (let i = 0; i < array.length; i++) {

        let valor = array[i].toString().split("").reduce( (acomulador, numero ) => acomulador + parseInt(numero), 0);
       
        nuevoArray.push(valor);
        
    }
    
