// Author: Pushpendra Kr. Sharma

// to remove the playing video from the iframe 
$('.modal').each(function(){
         var src = $(this).find('iframe').attr('src');
        $('.modal').click(function(){
            $('.modal').find('iframe').attr('src', '');
            $('.modal').find('iframe').attr('src', src);
        });
    }); 

// to add the relevent video to the iframe 
$('#video-modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var videoid = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.abc').text('New message to ' + videoid)
  modal.find('.modal-body iframe').attr('src',videoid)
  modal.find('.modal-body img').attr('src',videoid)
})

var viewport = jQuery(window).innerWidth();

/* -- Fixed Header --  */
if( viewport > 991 )
{	
	$(window).scroll(function () {
		 var sc = $(window).scrollTop()
		if (sc > 80) {			
			$( ".main-nav" ).addClass("fixed-top");			
		} else {
			$(".main-nav").removeClass("fixed-top");
		}
	});

};



$(window).scroll(function () {
		 var sc = $(window).scrollTop()
		if (sc > 80) {			
			$('.back-to-top').addClass('show-top');
		} else {
			$('.back-to-top').removeClass('show-top');
		}
	});
		
	
/* -- Scroll To Top -- */
$('.back-to-top').click(function(){
    $('html,body').animate({scrollTop: 0}, 600);
});

/*-- Main Menu Dropdown classes --*/
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.first-dd.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});

/*-- Our Team Slider --*/

var podcastSlider;
function podcastSettings() {
    var minmax;
      if(viewport > 1367) {
        minmax=4;
        var sw = 264;
      } else if(viewport > 1281) {
        minmax=4;
        var sw = 276;
	  } else if(viewport > 1200) {
        minmax=4;
        var sw = 260;
	  } else if(viewport > 767) {
        minmax=2;
        var sw = 350;		
      } else {
        minmax=1;
        var sw = 480;
      }

      var sliderSettings={
		maxSlides: minmax,
        slideMargin: 15,
        slideWidth: sw,
		controls: true,
		touchEnabled: false,
		pager: true
      };

      return sliderSettings;
    }

    $(window).resize(function() {
      podcastSlider.reloadSlider(podcastSettings());
    });

    $(document).ready(function(){
      podcastSlider = $('.ourteam-slider').bxSlider(podcastSettings());
    });

/*-- Insurance Slider --*/ 
if(viewport > 992) { 
	$('#insurance-slider').bxSlider({	
  maxSlides: 5,    
  slideMargin: 15,
  slideWidth: 200,
  auto: true,
	controls: true,
	touchEnabled: false,
	pager: false	
  });
} else {
	$('#insurance-slider').bxSlider({	
  maxSlides: 1,    
  slideMargin: 15,
  slideWidth: 380,
  auto: true,
	controls: true,
	touchEnabled: false,
	pager: false	
  });
}   


/*-- Main Slider --*/
$('#main-slider').bxSlider({	
    slideWidth: 1920,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 0,
	auto: true,
	mode: 'fade',
	speed: 1000,
	pause:6000,
	pager: false
  });	
  
/*-- Before and After Slider --*/
$('#ba-slider').bxSlider({	
    slideWidth: 1920,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 0,
	auto: false,
	mode: 'fade',
	speed: 1000,
	
  });  
  
/*-- Register Slider --*/
$('#register-slider').bxSlider({	
    slideWidth: 1920,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 0,
	auto: true,
	mode: 'fade',
	speed: 1000,
	pager: true,
	responsive: true,
	controls: false
  });  

  
  
/* -- Move H1 to top --*/
 if( viewport < 768 )
{
	//$( ".treatment-banner h1" ).insertBefore( ".treatment-banner" );
	//$( "body.home .featured-section" ).insertAfter( "body.home .mid-section" );
	$( ".contact-box" ).insertAfter( ".mid-section" );
	$( ".ct-topbar" ).insertAfter( ".phone-header" );
	$( ".contact-section .contact-form" ).insertAfter( ".contact-section address" );	
	
}


/* -- Contact Form Validations --*/
function form_submit(){
	if(document.generic_contact.Name.value == ""){
		alert('Please enter first name');
		document.generic_contact.Name.focus();
		return false;
	}

	
	if(document.generic_contact.Phone.value == ""){
		alert('Please enter valid Phone number');
		document.generic_contact.Phone.focus();
		return false;
	}
	
	if(document.generic_contact.Email.value == ""){
		alert('Please enter valid e-mail address');
		document.generic_contact.Email.focus();
		return false;
	}
	if(document.generic_contact.Email.value != ""){
		
		var x=document.generic_contact.Email.value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Not a valid e-mail address");
		  document.generic_contact.Email.focus();
		  return false;
		  }
	}
}

/* -- Book a Consultation Page Form Validations --*/
function form_submit_book(){
	if(document.ask_our_expert.Name.value == ""){
		alert('Please enter first name');
		document.ask_our_expert.Name.focus();
		return false;
	}
	
	if(document.ask_our_expert.Phone.value == ""){
		alert('Please enter valid Phone number');
		document.ask_our_expert.Phone.focus();
		return false;
	}
	
	if(document.ask_our_expert.Email.value == ""){
		alert('Please enter valid e-mail address');
		document.ask_our_expert.Email.focus();
		return false;
	}
	if(document.ask_our_expert.Email.value != ""){
		
		var x=document.ask_our_expert.Email.value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Not a valid e-mail address");
		  document.ask_our_expert.Email.focus();
		  return false;
		  }
	}
}

/* -- Product Page Form Validations --*/
function form_submit_prod(){
	if(document.prod_form.Name.value == ""){
		alert('Please enter first name');
		document.prod_form.Name.focus();
		return false;
	}

	
	if(document.prod_form.Phone.value == ""){
		alert('Please enter valid Phone number');
		document.prod_form.Phone.focus();
		return false;
	}
	
	if(document.prod_form.Email.value == ""){
		alert('Please enter valid e-mail address');
		document.prod_form.Email.focus();
		return false;
	}
	if(document.prod_form.Email.value != ""){
		
		var x=document.prod_form.Email.value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Not a valid e-mail address");
		  document.prod_form.Email.focus();
		  return false;
		  }
	}
}

/* -- Ask Our Dermatologist Page Form Validations --*/
function form_submit_dermatologist(){
	if(document.ask_our_dermatologist.Name.value == ""){
		alert('Please enter first name');
		document.ask_our_dermatologist.Name.focus();
		return false;
	}
	if(document.ask_our_dermatologist.Surname.value == ""){
		alert('Please enter surname');
		document.ask_our_dermatologist.Surname.focus();
		return false;
	}

	
	if(document.ask_our_dermatologist.Phone.value == ""){
		alert('Please enter valid Phone number');
		document.ask_our_dermatologist.Phone.focus();
		return false;
	}
	
	if(document.ask_our_dermatologist.Email.value == ""){
		alert('Please enter valid e-mail address');
		document.ask_our_dermatologist.Email.focus();
		return false;
	}
	if(document.ask_our_dermatologist.Email.value != ""){
		
		var x=document.ask_our_dermatologist.Email.value;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Not a valid e-mail address");
		  document.ask_our_dermatologist.Email.focus();
		  return false;
		  }
	}
}

// Add the Current Year in Copyright
document.getElementById("year").innerHTML = new Date().getFullYear();