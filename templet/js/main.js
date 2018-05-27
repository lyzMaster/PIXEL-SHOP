$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('.slider').slider({full_width: true});
	add_remove_bar_shadow();
	add_remove_user_on_bar_shadow();
	change_bar_word_color(".bar_word1");
	change_bar_word_color(".bar_word2");
	change_bar_word_color(".bar_word3");
})


function add_search() {
	$("#search_from").css("z-index",50);
	$("input").focus();
}


function add_bar() {
	$("#search_from").css("z-index",-999);
}

function add_remove_user_on_bar_shadow() {
	$("#user_on_nav").mouseover(function(){
		$("#user_on_nav").removeClass('z-depth-0').addClass('z-depth-1');
	});
	$("#user_on_nav").mouseout(function(){
		$("#user_on_nav").removeClass('z-depth-1').addClass('z-depth-0');
	});
}

function add_remove_bar_shadow() {
	$('.scrollspy').scrollSpy();
	$(window).scroll(
		function () {
			var pos = $(window).scrollTop();
			if(pos!=0){
				$('nav').removeClass().addClass('z-depth-1');
			}
			else {
				$('nav').removeClass().addClass('z-depth-0');
			}
		}
	)
}

function change_bar_word_color(barword) {
	$(barword).mouseover(function(){
		$(barword).css("color",'#3E77FF');
	});
	$(barword).mouseout(function(){
		$(barword).css("color",'#7A7A7C');
	});
}