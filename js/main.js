const logo = document.getElementById('logo');
const imgWth = document.getElementById('logo');
const imgBlk = document.getElementById('logo');
const find = document.getElementById('find');
const containerLogotipo = document.getElementById('logo');
const body = document.getElementById('cambio');

 var pathname = window.location.pathname;
 var leafname= pathname.split('\\').pop().split('/').pop();
    

logo.addEventListener('click',()=>{
    if (leafname == 'index.html') {
        if (body.classList == 'light-mode') {
           document.body.classList.remove('light-mode');
           document.body.classList.add('dark-mode');
           imgWth.src = "img/logo-wth.png";
           find.src = "img/finding2.svg";
           localStorage.setItem('tema','oscuro');
       }else{
           document.body.classList.remove('dark-mode');
           document.body.classList.add('light-mode');
           imgBlk.src = "img/logo-blk.png";
           find.src = "img/finding.svg";
           localStorage.setItem('tema','claro');
       }
    } else if (leafname == 'galeria.html') {
       if (body.classList == 'light-mode') {
           document.body.classList.remove('light-mode');
           document.body.classList.add('dark-mode');
           imgWth.src = "img/logo-wth.png";
           localStorage.setItem('tema','oscuro');
       }else{
           document.body.classList.remove('dark-mode');
           document.body.classList.add('light-mode');
           imgBlk.src = "img/logo-blk.png";
           localStorage.setItem('tema','claro');
       }
    }else if (leafname == 'formulario.html') {
        if (body.classList == 'light-mode') {
           document.body.classList.remove('light-mode');
           document.body.classList.add('dark-mode');
           imgWth.src = "img/logo-wth.png";
           localStorage.setItem('tema','oscuro');
       }else{
           document.body.classList.remove('dark-mode');
           document.body.classList.add('light-mode');
           imgBlk.src = "img/logo-blk.png";
           localStorage.setItem('tema','claro');
       }
    }
    
})


  const guardarTema = () =>{

    if (leafname == 'index.html') {
        if(localStorage.getItem('tema') === 'oscuro'){
          document.body.classList.remove('ligth-mode');
          document.body.classList.add('dark-mode');
          imgWth.src = "img/logo-wth.png";
          find.src = "img/finding2.svg";
      }else{
          document.body.classList.remove('dark-mode');
      }
    } else if (leafname == 'galeria.html') {
       if(localStorage.getItem('tema') === 'oscuro'){
          document.body.classList.remove('ligth-mode');
          document.body.classList.add('dark-mode');
          imgWth.src = "img/logo-wth.png";
      }else{
          document.body.classList.remove('dark-mode');
      }
    }else if (leafname == 'formulario.html') {
        if(localStorage.getItem('tema') === 'oscuro'){
          document.body.classList.remove('ligth-mode');
          document.body.classList.add('dark-mode');
          imgWth.src = "img/logo-wth.png";
      }else{
          document.body.classList.remove('dark-mode');
      } 
    }

  }

  guardarTema();



  if (leafname == 'galeria.html') {
        $("section").append("<div class='glitch-window'></div>");
    //fill div with clone of real header
    $( "h1.glitched" ).clone().appendTo( ".glitch-window" );

    const button = document.getElementById('btnM')
    const button2 = document.getElementById('btn2');
    const oculto = document.getElementById('ocultar');
    const oculto2 = document.getElementById('ocultar2');

  button.addEventListener('click', () => {
    oculto.classList.toggle('mostrar');
   });

   button2.addEventListener('click', () => {
    oculto2.classList.toggle('mostrar');
   });

  }

  if (leafname == 'formulario.html') {
      $("section").append("<div class='glitch-window'></div>");
    //fill div with clone of real header
    $( "h1.glitched" ).clone().appendTo( ".glitch-window" );
  }

