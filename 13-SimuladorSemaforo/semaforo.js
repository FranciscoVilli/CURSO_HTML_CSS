const lucesCirculo = document.querySelectorAll('.lucesCirculo');
let cont = 0;
const mostrarLuz =()=>{
    lucesCirculo[cont].className = 'lucesCirculo';
    cont++;

    if(cont>2){
        cont = 0;
    }

    const luzActual = lucesCirculo[cont];
    luzActual.classList.add(luzActual.getAttribute('color'))
}
setInterval(mostrarLuz,1000)