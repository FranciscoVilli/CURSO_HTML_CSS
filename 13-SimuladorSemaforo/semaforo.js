console.time('Tiempo de ejecución');

const lucesCirculo = document.querySelectorAll('.lucesCirculo');
let cont = 0;
const tiempoEjecucionLabel = document.getElementById('tiempoEjecucion'); // Obtén el elemento span por su id

const mostrarLuz = () => {
    lucesCirculo[cont].className = 'lucesCirculo';
    cont++;

    if (cont > 2) {
        cont = 0;
    }

    const luzActual = lucesCirculo[cont];
    luzActual.classList.add(luzActual.getAttribute('color'));

    // Calcula y muestra el tiempo de ejecución actual
    const tiempoTranscurrido = Math.floor(performance.now()); // Milisegundos
    tiempoEjecucionLabel.textContent = `Tiempo de ejecución: ${tiempoTranscurrido} ms`;
};

setInterval(mostrarLuz, 1000);

console.timeEnd('Tiempo de ejecución');