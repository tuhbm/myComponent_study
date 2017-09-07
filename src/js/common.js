$(function(){
  var btn = $('.btn-tab'),
    active = 'active';
  $(btn).on('click foucsin' , function(){
    $(this).closest('li').addClass(active).siblings('li').removeClass(active);
  });
});