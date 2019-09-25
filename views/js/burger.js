$(document).ready(function(){
	$('.nav-icon').click(function(){
        $(this).toggleClass('active');
        $('ul').toggleClass('switch');
    });
});