$(function(){
  var $active = 'active';
  function firstTab(){
    var $btn = $('.tabComponent1 .btn-tab');
    $btn.on('click' , function(){
      $(this).closest('li').addClass($active).siblings('li').removeClass($active);
      event.preventDefault();
    });
  }
  function secondTab(){
    var $btn = $('.tabComponent2 .tab-head li a');
    var $tabCont = $('.tabComponent2 .tab-content');
    $btn.on('click' ,function() {
      var tab_id = $(this).attr('data-tab');
      $btn.parent('li').removeClass($active);
      $tabCont.removeClass($active);
      $(this).parent('li').addClass($active);
      $("#" + tab_id).addClass($active);
      event.preventDefault();
    });
  }

  function thirdTab(){
    var $btn = $('.tabComponent3 .tab-head li a');
    var $tabCont = $('.tabComponent3 .tab-content');
    $btn.on('click', function(){
      var index = $btn.index(this);
      $btn.parent('li').removeClass($active);
      $(this).closest('li').addClass($active);
      $tabCont.removeClass($active);
      $tabCont.eq(index).addClass($active);
      event.preventDefault();
    });

  }



  firstTab();
  secondTab();
  thirdTab();
});