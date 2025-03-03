let numeroPredeterminado = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let numeroUsuario = "";
let adivinar = false;

for(let contador = 0; contador < 3; contador++){    
    numeroUsuario = prompt("Intenta adivinar el número del 0 al 10:");
    if(numeroUsuario == numeroPredeterminado){
        alert(`¡Felicidades, acertaste! El número era ${numeroPredeterminado}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert("Lo siento, no acertaste. ¡El número era ${numeroAdivinacion}!");
}
