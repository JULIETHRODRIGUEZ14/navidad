
let papaNoel = "off"
let papaNoelStop = document.getElementById("papaquieto");
let botonAudio = new Audio('./sound/navidad.mp3');
let botonClick = new Audio('./sound/audio.mp3');


// botonAudio.disabled = true; 
            

function bailar(){
    if (papaNoel =="off"){
        papaNoel = "on"
        papaNoelStop.classList.add("on");
        papaNoelStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        console.log("On");
    }else{
        papaNoel = "on"
        papaNoelStop.classList.remove("off");
        papaNoelStop.addEventListener('click',()=>{
            botonAudio.pause();
    })
    console.log("Off");
}
}

    
    




function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / ( 3600 * 24))).slice(-2);

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

function cuentaRegresiva(tiempoFaltante,mensaje){
    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const tiempoActual = setInterval( () => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = t.diasFaltantes;
        horas.innerHTML = t.horasFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;

        if(t.tiempoFaltante < 1){
            clearInterval(tiempoActual);
            feliz.innerHTML = mensaje;
            dias.innerHTML = '00';
            horas.innerHTML = '00';
            minutos.innerHTML = '00';
            segundos.innerHTML = '00';
            papaNoelStop.classList.add("on");
            papaNoel=("off");
        }
        if(t.tiempoFaltante >1){
            papaNoel=("on");
        }
    }, 1000)
};

//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'))//

cuentaRegresiva('Nov 19 2023 02:01:00 GMT-0500','¡Feliz Navidad!')

