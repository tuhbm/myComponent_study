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

  function searchList(){
    var $obj = $('.inner-search');
    var $objInput = $obj.find('input');
    // var $objBtn = $obj.find('button');
    // var $this = $(this);
    //
    // var $inner = $this.parent('.inner-search');
    // var $txt = $inner.find('input').val();
    // $objBtn.on('click',function(){
    //   var $inner = $(this).parent('.inner-search');
    //   var $txt = $inner.find('input').val();
    //   console.log($inner);
    //   console.log($txt);
    //   $inner.addClass('active');
    // });
    // $objInput.on('click', function(){
    //   var $inner = $(this).parent('.inner-search');
    //   var $txt = $inner.find('input').val();
    //   console.log($inner);
    //   console.log($txt);
    //   $inner.addClass('active');
    // });
    // $('body').on('click', function(){
    //   console.log(1);
    //   var $inner = $(this).parent('.inner-search');
    //   if($obj.hasClass('active')){
    //     $obj.removeClass('active');
    //   }else{
    //     return false;
    //   }
    //
    // });
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $objInput.autocomplete({
      source: availableTags
    });

  }



  firstTab();
  secondTab();
  thirdTab();
  searchList();
});