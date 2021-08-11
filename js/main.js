
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
    const buttonr = document.getElementById('btnMr')
    const button2r = document.getElementById('btn2r');
    const oculto = document.getElementById('ocultar');
    const oculto2 = document.getElementById('ocultar2');
    const ocultor = document.getElementById('ocultarr');
    const oculto2r = document.getElementById('ocultar2r');

  button.addEventListener('click', () => {
    oculto.classList.toggle('mostrar');
    oculto2.classList.remove('mostrar');
    if (button.classList == 'btn-active') {
        button.classList.remove('btn-active')
    }else{
         button.classList.toggle('btn-active')
         button2.classList.remove('btn-active')
    }
   });

   button2.addEventListener('click', () => {
    oculto2.classList.toggle('mostrar');
    oculto.classList.remove('mostrar');
    if (button2.classList == 'btn-active') {
        button2.classList.remove('btn-active')
    }else{
         button2.classList.toggle('btn-active')
         button.classList.remove('btn-active')
    }
   });

   buttonr.addEventListener('click', () => {
    ocultor.classList.toggle('mostrar');
    oculto2r.classList.remove('mostrar');
    if (buttonr.classList == 'btn-active') {
        buttonr.classList.remove('btn-active')
    }else{
         buttonr.classList.toggle('btn-active')
         button2r.classList.remove('btn-active')
    }
   });

   button2r.addEventListener('click', () => {
    oculto2r.classList.toggle('mostrar');
    ocultor.classList.remove('mostrar');
    if (button2r.classList == 'btn-active') {
        button2r.classList.remove('btn-active')
    }else{
         button2r.classList.toggle('btn-active')
         buttonr.classList.remove('btn-active')
    }
   });


  }

  if (leafname == 'formulario.html') {
      $("section").append("<div class='glitch-window'></div>");
    //fill div with clone of real header
    $( "h1.glitched" ).clone().appendTo( ".glitch-window" );
  }

