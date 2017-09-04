$(document).ready(function(){

	// Мобильное меню 
	$(".fa-bars").click(function(m){
		m.preventDefault();
		$(".header__menu-box").slideToggle(500);
	});
	// Конец Мобильное меню

    $(".phone").mask("+ 7 (999) 999 - 99 - 99?"); 

    var owl2 = $("#slider");
    owl2.owlCarousel({
        loop:true,
        nav:true, 
        autoplay:true,
        smartSpeed:1000,
        margin:15,
        center:false,     //если нужны обрезаные края
        navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2 
            },
            768:{
                items:2
            },      
        }
    });

});//END READY
