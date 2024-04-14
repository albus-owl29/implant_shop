$(document).ready(function(){

    $('.start-btn a').click(function(){
        
        let zero=0;
        $('body,html').animate({

            scrollTop: $($(this).attr('href')).offset().top-zero

        }, 800);
    });
});