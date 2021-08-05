const btnCambio = document.getElementById('btnC');
const OF1 =  document.getElementById('ocultarF1');
const OF2 =  document.getElementById('ocultarF2');
const OF3 =  document.getElementById('ocultarF3');
const OF4 =  document.getElementById('ocultarF4');



   btnCambio.addEventListener('click', () => {
       let respuestas = 2;
        if (respuestas == 2) {
            OF1.classList.toggle('mostrar');
        }
        else if(respuestas == 3){
            OF2.classList.toggle('mostrar');
        }
        else if(respuestas == 4){
            OF3.classList.toggle('mostrar')
        }
        else if(respuestas > 4){
            OF4.classList.toggle('mostrar');
        }
    //  OF1.classList.toggle('ocultar');
   })