$(function(){
  function firstTab(){
    var $btn = $('.btn-tab');
    var $active = 'active';
    $btn.on('click' , function(){
      $(this).closest('li').addClass($active).siblings('li').removeClass($active);
      event.preventDefault();
    });
  }
  function secondTab(){
    var $btn = $('.tabComponent2 .tab-head li a');
    var $tabCont = $('.tabComponent2 .tab-content');
    var $active = 'active';
    $btn.on('click' ,function() {
      var tab_id = $(this).attr('data-tab');
      $btn.parent('li').removeClass($active);
      $tabCont.removeClass($active);
      $(this).parent('li').addClass($active);
      $("#" + tab_id).addClass($active);
    });
  }



  firstTab();
  secondTab();
});