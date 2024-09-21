/*calculo de la distancia */ 
function calcularMRU_Distancia(event) {
    event.preventDefault();
    const velocidad = parseFloat(document.getElementById("mruVelocity").value); /** se capturan los datos dentro del fumulario y se convierten en */
    const tiempo = parseFloat(document.getElementById("mruTime").value);/** datos flotantes para evaluarlos  */

    if (velocidad && tiempo) { /**Verifica que los valores sean números válidos y que el tiempo sea mayor que cero*/
        const distancia = velocidad * tiempo;
        document.getElementById("resultado-mru-distancia").textContent = `La distancia es: ${distancia.toFixed(2)} m`;
    } else {
        document.getElementById("resultado-mru-distancia").textContent = "Por favor, ingrese valores válidos.";
    }
}
/** calculo de Velocidad   */
function calcularMRU_Velocidad(event) {
    event.preventDefault();
    const distancia = parseFloat(document.getElementById("mruDistance").value);
    const tiempo = parseFloat(document.getElementById("mruTimeVel").value);

    if (distancia && tiempo) {
        const velocidad = distancia / tiempo;
        document.getElementById("resultado-mru-velocidad").textContent = `La velocidad es: ${velocidad.toFixed(2)} m/s`;
    } else {
        document.getElementById("resultado-mru-velocidad").textContent = "Por favor, ingrese valores válidos.";
    }
}
/**calculo del tiempo  */
function calcularMRU_Tiempo(event) {
    event.preventDefault();
    const distancia = parseFloat(document.getElementById("mruDistanceTi").value);
    const velocidad = parseFloat(document.getElementById("mruVelocityTi").value);

    if (distancia && velocidad) {
        const tiempo = distancia / velocidad;
        document.getElementById("resultado-mru-tiempo").textContent = `El tiempo es: ${tiempo.toFixed(2)} s`;
    } else {
        document.getElementById("resultado-mru-tiempo").textContent = "Por favor, ingrese valores válidos.";
    }
}
/*---------------------------------------formula del MRUV----------------------------------------------------------------------------------*/
/**aceleracion del MRUV */
function calcularMRUV_Aceleracion(event) {
    event.preventDefault();
    const velInicial = parseFloat(document.getElementById("mruvVelInicial").value);
    const velFinal = parseFloat(document.getElementById("mruvVelFinal").value);
    const tiempo = parseFloat(document.getElementById("mruvTiempo").value);

    if (velInicial && velFinal && tiempo) {
        const aceleracion = (velFinal - velInicial) / tiempo;
        document.getElementById("resultado-mruv-aceleracion").textContent = `La aceleración es: ${aceleracion.toFixed(2)} m/s²`;
    } else {
        document.getElementById("resultado-mruv-aceleracion").textContent = "Por favor, ingrese valores válidos.";
    }
}
/**calculo de la distancia del MRUV */
function calcularMRUV_Distancia(event) {
    event.preventDefault();
    const velInicial = parseFloat(document.getElementById("mruvVelInicialDist").value);
    const aceleracion = parseFloat(document.getElementById("mruvAceleracion").value);
    const tiempo = parseFloat(document.getElementById("mruvTiempoDist").value);

    if (velInicial && aceleracion && tiempo) {
        const distancia = (velInicial * tiempo) + (0.5 * aceleracion * Math.pow(tiempo, 2));
        document.getElementById("resultado-mruv-distancia").textContent = `La distancia recorrida es: ${distancia.toFixed(2)} m`;
    } else {
        document.getElementById("resultado-mruv-distancia").textContent = "Por favor, ingrese valores válidos.";
    }
}
/**calculo de la velocidad final del MRUV */
function calcularMRUV_VelocidadFinal(event) {
    event.preventDefault();
    const velInicial = parseFloat(document.getElementById("mruvVelInicialVel").value);
    const aceleracion = parseFloat(document.getElementById("mruvAceleracionVel").value);
    const tiempo = parseFloat(document.getElementById("mruvTiempoVel").value);

    if (velInicial && aceleracion && tiempo) {
        const velFinal = velInicial + (aceleracion * tiempo);
        document.getElementById("resultado-mruv-velocidad-final").textContent = `La velocidad final es: ${velFinal.toFixed(2)} m/s`;
    } else {
        document.getElementById("resultado-mruv-velocidad-final").textContent = "Por favor, ingrese valores válidos.";
    }
}