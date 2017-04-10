
$(function() {

    $(".date-picker").datepicker({ firstDay: 1 });
    
	$( ".skip-btn" ).hover(
	  function() {

	  	if( ! $( this ).hasClass("active") ){
	  		var link_text = $( this ).children( "img" ).attr("src");
	    
	   		var replace = link_text.replace("pink", "white");

		    // alert(replace);

		    $( this ).children( "img" ).attr("src", replace);
	  	}
	  


	  }, function() {

	  	if( ! $( this ).hasClass("active") ){
	    var link_text = $( this ).children( "img" ).attr("src");
	    
	    var replace = link_text.replace("white", "pink");

	    // alert(replace);

	    $( this ).children( "img" ).attr("src", replace);
		}
	  }
	);

	$( ".skip-btn" ).click(function() {
		if( ! $( this ).hasClass("active") ){
			var link_text = $( ".active.skip-btn").children( "img" ).attr("src");
		    
	   		var replace = link_text.replace("white", "pink");

			$( ".active.skip-btn").children( "img" ).attr("src", replace);

		  	$( ".active.skip-btn").removeClass("active");

		  	$( this ).addClass("active");
	  	}

	});

	$( ".configure" ).click(function() {
		if( ! $( this ).hasClass("active") ){

			$( ".active.configure" ).removeClass("active");

		  	$( this ).addClass("active");


	  	}

	});	

	$( ".delivery" ).click(function() {
		if( ! $( this ).hasClass("active") ){

			$( ".active.delivery" ).removeClass("active");

		  	$( this ).addClass("active");


	  	}

	});	


	if(location.pathname != "/"){
		$("a[href*='" + location.pathname + "']").addClass("active");
	} else { 
		$(".home").addClass("active");
	}

	

});
