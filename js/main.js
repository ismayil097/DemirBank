$(document).ready(function(){
    /*language click*/
    $(".active_lang").click(function(){
        $(this).css('user-select', 'none');       
        $(".all_langs").toggle();
    });
    
    /*Life button click*/
    $('#life').click(function(){
        changeLife();   
    });
    
    /*Business button click*/
    $('#business').click(function(){
        changeBusiness();   
    });
    
    /*Switch container click*/
    $('#switch_container').click(function(e){
        if((e.pageX - $(this).offset().left)>e.target.clientWidth/2){
           changeBusiness()
           }else{
               changeLife();
           }
    });
    
    var switchClicked =false;
    var swey = 0;
    /*when switch moving with mouseDown*/
  $('#switch').mousedown(function(){
      swey =1;
      $('body').disableTextSelect();
    switchClicked = true;   
    $(document).mousemove(function(e){  
            if(switchClicked){
              if(e.pageX < document.body.clientWidth/2){
                  $('#switch').css("left","0%");
            }else{
                $('#switch').css("left","100%");
            }
        }
     });       
  });
    /*when switch release*/
    $(document).mouseup(function(e){
        switchClicked =false;
       
        if(e.pageX > document.body.clientWidth/2 && swey==1 ){
                changeBusiness();
                $('body').enableTextSelect();
            }else if (e.pageX < document.body.clientWidth/2 && swey==1) {
                console.log('sol');
                changeLife();
                $('body').enableTextSelect();
            }
        swey=0;
    });
    
    /*Change Life Switch function*/
    function changeLife(){
        $('#switch').css('left','0');
        $('.st_i').addClass('active');
        $('.st_c').removeClass('active');
        $('.open_camps').css('display','block');
        $('.home_page').addClass('stage_i');
        $('.home_page').removeClass('stage_c');
    };

    /*Change Business Switch function*/
    function changeBusiness(){
        $('#switch').css('left','100%');
        $('.st_c').addClass('active');
        $('.st_i').removeClass('active');
        $('.open_camps').css('display','none');
        $('.home_page').addClass('stage_c');
        $('.home_page').removeClass('stage_i');
    };
    
    /*call pop Up*/
    $('.call').click(function(){
        $('.pop_ups').fadeToggle();
        $('.pp_call').fadeToggle();
    });

    $('.close_call_pp').click(function(){
        $('.pop_ups').fadeToggle();
        $('.pp_call').fadeToggle();
    });
    
     /*Search pop Up*/
    $('.open_search').click(function(){
        $('.pop_ups').fadeToggle();
        $('.pp_search').fadeToggle();
    });

    $('.close_search_pp').click(function(){
        $('.pop_ups').fadeToggle();
        $('.pp_search').fadeToggle();
    });
    
    /*Open mobile menu button click*/
    $('.open_mobile_menu').click(function(){
        $('.home_page').toggleClass('open_mobile_menu_ss');
        $('.open_mobile_menu_ss .side_menu').css('right','0');
    });
    
   /* Close mobile menu button click*/
    $('.close_mobile_menu').click(function(){
        $('.open_mobile_menu_ss .side_menu').css('right','-100%');
        $('.home_page').toggleClass('open_mobile_menu_ss');     
    });
    
    /*News slide*/
    $('.open_camps span').click(function(){
        $(this).fadeOut();
        $('.show_comps .ml_wraps').css({'position':'relative','top':'-60px','background-size':'70px','padding':'80px 50px 0 50px'});
        $('.news').fadeIn();
    });
    
    /*Slider*/
    $("#carousel").owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTabletSmall : [768,1],
        itemsMobile:[479,1]

    });
});

/*text selection disabled*/
jQuery.fn.disableTextSelect = function() {
	return this.each(function() {
		$(this).css({
			'MozUserSelect':'none',
			'webkitUserSelect':'none'
		}).attr('unselectable','on').bind('selectstart', function() {
			return false;
		});
	});
};

jQuery.fn.enableTextSelect = function() {
	return this.each(function() {
		$(this).css({
			'MozUserSelect':'',
			'webkitUserSelect':''
		}).attr('unselectable','off').unbind('selectstart');
	});
}; 


