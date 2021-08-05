const OF1 =  document.getElementById('ocultarF1');
const OF2 =  document.getElementById('ocultarF2');
const OF3 =  document.getElementById('ocultarF3');
const OF4 =  document.getElementById('ocultarF4');


const bt1 = document.getElementById('btn1');
const bt2 = document.getElementById('btn2');
const bt3 = document.getElementById('btn3');
const bt4 = document.getElementById('btn4');
const bt5 = document.getElementById('btn5');
const bt6 = document.getElementById('btn6');
const bt7 = document.getElementById('btn7');
const bt8 = document.getElementById('btn8');
const bt9 = document.getElementById('btn9');
const bt10 = document.getElementById('btn10');
const btnCancel = document.getElementById('btnCancelar');

var array = [];
let respuestas = 2;

btnCancel.addEventListener('click', () => {
     
})


btn1.addEventListener('click', () => {
    var respuesta1 = 'respuesta 1';
    array.push(respuesta1);
    OF1.classList.remove('mostrar');
    OF2.classList.toggle('mostrar')
    // alert(array);
})

btn2.addEventListener('click', () => {
    var respuesta1 = 'respuesta 2';
    array.push(respuesta1);
    OF1.classList.remove('mostrar');
    OF2.classList.toggle('mostrar')
    // alert(array);
})
btn3.addEventListener('click', () => {
    var respuesta1 = 'respuesta 1';
    array.push(respuesta1);
    OF2.classList.remove('mostrar');
    OF3.classList.toggle('mostrar')
    // alert(array);
})
btn4.addEventListener('click', () => {
    var respuesta1 = 'respuesta 2';
    array.push(respuesta1);
    OF2.classList.remove('mostrar');
    OF3.classList.toggle('mostrar')
    // alert(array);
})
btn5.addEventListener('click', () => {
    var respuesta1 = 'respuesta 3';
    array.push(respuesta1);
    OF2.classList.remove('mostrar');
    OF3.classList.toggle('mostrar')
    // alert(array);
})
btn6.addEventListener('click', () => {
    var respuesta1 = 'respuesta 1';
    array.push(respuesta1);
    OF3.classList.remove('mostrar');
    OF4.classList.toggle('mostrar')
    //  alert(array);
})
btn7.addEventListener('click', () => {
    var respuesta1 = 'respuesta 2';
    array.push(respuesta1);
    OF3.classList.remove('mostrar');
    OF4.classList.toggle('mostrar')
    //  alert(array);
})
btn8.addEventListener('click', () => {
    var respuesta1 = 'respuesta 3';
    array.push(respuesta1);
    OF3.classList.remove('mostrar');
    OF4.classList.toggle('mostrar')
    //  alert(array);
})
btn9.addEventListener('click', () => {
    var respuesta1 = 'respuesta 4';
    array.push(respuesta1);
    OF3.classList.remove('mostrar');
    OF4.classList.toggle('mostrar')
    // alert(array);
})

btn10.addEventListener('click', () => {
    var respuesta1 = document.getElementById('select').value;
    array.push(respuesta1);
    alert('Sus elecciones fueron: ' + array);
    location.href='galeria.html'
})


   
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
 
