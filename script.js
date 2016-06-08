///////// hover for tool tip code //////////

// !!!!!! Add in styling and animation  !!!!!!! //

$(document).ready(function() {
  
      //what to do when mouse hovers
      $('.hoverable').hover(function() { 
        
        //assign text inside "title" to variable
        var hoverText = $(this).attr('title');

        // move text into the div id
        // add scripting class then fade-in   
        $('div#myToolTip').text(hoverText);
        
        // what to do when mouse leaves object
      }, function() { 
        
        //add fade-out animation, then remove scripting class and text
        $('div#myToolTip').fadeOut();
        
      //close hover event anonymous function
      });
  
//close document ready anonymous function  
});








