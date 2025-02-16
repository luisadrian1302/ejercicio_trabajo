

function updateClock(respuestasCorrectas) {
    

    for (let i = 1; i <= respuestasCorrectas; i++) {
        const timeElement = document.getElementById(`time${i}`);
        const greetingElement = document.getElementById(`greeting${i}`);
        const widget = document.querySelector(`#time${i}`).parentElement;

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        timeElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        if (hours < 12) {
            greetingElement.textContent = "¡Buenos días!";
            widget.style.backgroundColor = "#ffeb3b"; 
        } else if (hours < 18) {
            greetingElement.textContent = "¡Buenas tardes!";
            widget.style.backgroundColor = "#ff9800"; 
        } else {
            greetingElement.textContent = "¡Buenas noches!";
            widget.style.backgroundColor = "#3f51b5";
        }
    }
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Actualizar el reloj cada segundo


