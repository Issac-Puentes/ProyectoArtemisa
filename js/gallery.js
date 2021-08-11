function showArbustus(){
  fetch('http://localhost:3000/Madrono/Arbustus')
  .then(Response => Response.json())
  .then(function content(info){
  console.log(info);
  for(var n=0;n<info.length;n++){
  document.getElementById('ocultar').innerHTML +=
  '<div class="card">'+
  '<div class="card__image-holder">'+
  '<img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />'+
  '</div>'+
  '<div class="card-title">'+
  '<a href="#" class="toggle-info btn">'+
    '<span class="left"></span>'+
    '<span class="right"></span>'+
  '</a>'+
  '<h2>'+
  info[n].especie +
      '<small>'+ info[n].habito +'</small>'+
  '</h2>'+
  '</div>'+
  '<div class="card-flap flap1">'+
  '<div class="card-description asd">'+
  '<h2><small>Estados:</small></h2>'+
    info[n].estado.replace(/;/g,', ')+
  '</div>'+
'</div>'+

  '</div>';
  }
  }).catch(function Error(){
  alert('Fallo *Search()*');
  })
  } 

  function showComarostaphylis(){

    fetch('http://localhost:3000/Madrono/Comarostaphylis')
    .then(Response => Response.json())
    .then(function content(info){
    console.log(info);
    for(var n=0;n<info.length;n++){
    document.getElementById('ocultar').innerHTML +=
    '<div class="card">'+
    '<div class="card__image-holder">'+
    '<img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />'+
    '</div>'+
    '<div class="card-title">'+
    '<a href="#" class="toggle-info btn">'+
      '<span class="left"></span>'+
      '<span class="right"></span>'+
    '</a>'+
    '<h2>'+
    info[n].especie +
        '<small>'+ info[n].habito +'</small>'+
    '</h2>'+
    '</div>'+
    '<div class="card-flap flap1">'+
    '<div class="card-description asd">'+
    '<h2><small>Estados:</small></h2>'+
      info[n].estado.replace(/;/g,', ')+
    '</div>'+
  '</div>'+
  
    '</div>';
    }
    }).catch(function Error(){
    alert('Fallo *Search()*');
    })
    } 

  function pa(){
    
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  }

  showArbustus();
  showComarostaphylis();  