$(function() {
    $( "#esquerdo" ).draggable({
      appendTo: "body",
      helper: "clone"
    });
 $( "#esquerdo" ).accordion();
$( "#direito li" ).draggable({
      appendTo: "body",
      helper: "clone"
                
    });
    $( "#cart ol" ).droppable({
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      accept: ":not(.ui-sortable-helper)",
      drop: function( event, ui ) {
        $( this ).find( ".placeholder" ).remove();
        $( "<li></li>" ).html( ui.draggable.html() ).appendTo( this );
      }
    }).sortable({
      items: "li:not(.placeholder)",
      sort: function() {
        // gets added unintentionally by droppable interacting with sortable
        // using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
        $( this ).removeClass( "ui-state-default" );
      }
    });
    
  });
  
  
  