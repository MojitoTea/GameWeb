
$('.dubplus-switch-bg, .dubplus-menu-label').click(function(e){
	$(this).parent().toggleClass('dubplus-switch-on');
});
$('.menu-toggle').click(function(e){
  $('.dubplus-menu').toggleClass('dubplus-menu-open');
});
$('.dubplus-menu-section-header').click(function(e){
  $(this).toggleClass('dubplus-menu-header-closed');
  var $menuSec = $(this).next('.dubplus-menu-section');
  var $icon = $(this).find('span');
  $menuSec.toggleClass('dubplus-menu-section-closed');
  if ($menuSec.hasClass('dubplus-menu-section-closed')) {
    $icon.removeClass('fa-angle-down').addClass('fa-angle-right');
  } else {
    $icon.removeClass('fa-angle-right').addClass('fa-angle-down');
  }
});