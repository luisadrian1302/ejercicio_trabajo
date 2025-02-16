let respuestasCorrectas = 0;


function checkResponses() {

    let response = []
    
    for (let i = 0; i < 2; i++) {
        let isvalid = true;
        let arrayTests = generateRandomArray(8, 0,100);
        let response = ResponderPreguntas(arrayTests);
        
        for (let i = 0; i < response.length; i++) {

            if ( arrayTests[i] % 5 == 0 && arrayTests[i] % 3 == 0) {
                if (!isNaN(response[i])) {
                    isvalid = false;
                    continue;

                }

                if ("FizzBuzz".toLowerCase() != response[i].toLowerCase()) {
                    isvalid = false;
                }
            }else if( arrayTests[i] % 5 == 0 ){
    
                if (!isNaN(response[i])) {
                    isvalid = false;
                    continue;

                }
                if ("Buzz".toLowerCase() != response[i].toLowerCase()) {
                    isvalid = false;
                }
        
            }else if(arrayTests[i] % 3 == 0){
                
                if (!isNaN(response[i])) {
                    isvalid = false;
                    continue;
                }

                if ("Fizz".toLowerCase() != response[i].toLowerCase()) {
                    isvalid = false;
                }
            }

            
        }    
        if (isvalid) {
            respuestasCorrectas ++;
        }

        
    }


    for (let i = 0; i < 2; i++) {     
        let arrayTests = generateRandomArray(4, 0, 150);
        let sumarNumero = sumarNumeros(arrayTests);
        let comprobar = arrayTests.map(num => 
            num.toString()
               .split("")
               .reduce((acc, digit) => acc + parseInt(digit), 0)
        );
        if (JSON.stringify(comprobar) === JSON.stringify(sumarNumero)) {
            respuestasCorrectas ++;
        }
        
    }

    if (respuestasCorrectas > 1) {
        
        console.log("interval");
        setInterval(() => {
            updateClock(respuestasCorrectas)
            
        }, 1000);
    }


}

function generateRandomArray(size, min, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}


checkResponses();