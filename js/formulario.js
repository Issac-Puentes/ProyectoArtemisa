const OF1 =  document.getElementById('ocultarF1');
const OF2 =  document.getElementById('ocultarF2');
const OF3 =  document.getElementById('ocultarF3');
const OF4 =  document.getElementById('ocultarF4');

const btnCancel = document.getElementById('btnCancelar');

var array = [];
var J = 1;

btnCancel.addEventListener('click', () => {
     location.href='index.html';
});

btn1.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn1.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn1.value);
        console.log(array);
    }else{

    }
});
btn2.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn2.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn2.value);
        console.log(array);
    }else{

    }
});
btn3.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn3.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn3.value);
        console.log(array);
    }else{

    }
});
btn4.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn4.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn4.value);
        console.log(array);
    }else{

    }
});
btn5.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn5.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn5.value);
        console.log(array);
    }else{

    }
});
btn6.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn6.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn6.value);
        console.log(array);
    }else{

    }
});
btn7.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn7.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn7.value);
        console.log(array);
    }else{

    }
});
btn8.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn8.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn8.value);
        console.log(array);
    }else{

    }
});
btn9.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(btn9.value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn9.value);
        console.log(array);
    }else{

    }
});
btn10.addEventListener('click', () => {
    J++;
    if(J<8){
        array.push(document.getElementById('select').value);
        console.log(array);
        selecc();
    }else if(J==8){
        array.push(btn10.value);
        console.log(array);
    }else{

    }
});

function selecc(){
        fetch('http://localhost:3000/Pregunta/'+J)
        .then(Response => Response.json())
        .then(function content(info){
        if (info.length == 2) {
            document.getElementById('pr').innerHTML = info[0].pregunta;
            document.getElementById('desc').innerHTML = info[0].descripcion;
            for(var n=0;n<info.length;n++){
                var id = 'btn' + (n+1);
                document.getElementById(id).innerHTML = info[n].value;
                document.getElementById(id).value = info[n].value;
            }
            
            OF4.classList.remove('mostrar');
            OF1.classList.add('mostrar');
            OF2.classList.remove('mostrar');
            OF3.classList.remove('mostrar');
        }
        else if(info.length == 3){
            document.getElementById('pr').innerHTML = info[0].pregunta;
            document.getElementById('desc').innerHTML = info[0].descripcion;
            for(var n=0;n<info.length;n++){
                var id = 'btn' + (n+3);
                document.getElementById(id).innerHTML = info[n].value;
                document.getElementById(id).value = info[n].value;
            }
            
            OF4.classList.remove('mostrar');
            OF1.classList.remove('mostrar');
            OF2.classList.add('mostrar');
            OF3.classList.remove('mostrar');
        }
        else if(info.length == 4){
            document.getElementById('pr').innerHTML = info[0].pregunta;
            document.getElementById('desc').innerHTML = info[0].descripcion;
            for(var n=0;n<info.length;n++){
                var id = 'btn' + (n+6);
                document.getElementById(id).innerHTML = info[n].value;
                document.getElementById(id).value = info[n].value;
            }
            
            OF4.classList.remove('mostrar');
            OF1.classList.remove('mostrar');
            OF2.classList.remove('mostrar');
            OF3.classList.add('mostrar');
        }
        else if(info.length > 4){
            document.getElementById('pr').innerHTML = info[0].pregunta;
            document.getElementById('desc').innerHTML = info[0].descripcion;
            for(var n=0;n<info.length;n++){
                document.getElementById('select').innerHTML += '<option value="'+ info[n].value +'">'+ info[n].value +'</option>';
            }
            
            OF4.classList.add('mostrar');
            OF1.classList.remove('mostrar');
            OF2.classList.remove('mostrar');
            OF3.classList.remove('mostrar');
        }
        }).catch(function Error(){
        alert('Fallo *Search()*');
        })
}
 

