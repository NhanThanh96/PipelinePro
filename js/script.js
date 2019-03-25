$(document).ready(function(){
  // dropdown menu
  $(".js-navbar__dropdown").on("click", function(e){
    e.preventDefault();
    if($(this).next().hasClass("show")) {
      $(this).next().removeClass("show");
      $(this).next().slideUp(350);
      $(this).removeClass("show");
    }
    else {
      $(this).addClass("show");
      $(this).next().toggleClass('show'); // show ul current  
      $(this).next().slideToggle(350);
      }
    });
  
  // dropdown link
  $(window).click(function() {
    $(".js-add-new__dropdown").css("display" , "none");
    $(".js-profile__list").css("display" , "none");
    $(".js-pages-list").css("display" , "none");
    $(".js-component-list").css("display" , "none");
  });

  var toggleLink = (link, list) => {
    $(link).on("click", (e) => {
      e.preventDefault();
      $(list).toggleClass("show");
      $(list).fadeToggle(250);
      e.stopPropagation();
    });
  }

  toggleLink(".js-add-new__btn", ".js-add-new__dropdown");
  toggleLink(".js-profile__link", ".js-profile__list");
  toggleLink(".js-dropdown__explore-page", ".js-pages-list");
  toggleLink(".js-dropdown__view-component", ".js-component-list");

  // carousel
  $(".js-page-carousel-item:gt(0)").hide();
  $(".js-components__carousel-item--left:gt(0)").hide();
  $(".js-components__carousel-item--right:gt(0)").hide();
  
  setInterval(function() {
    $('.js-page-carousel-item:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.js-management-page-carousel');
    }, 3000);

  setInterval(function() {
    $('.js-components__carousel-item--left:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.js-components__carousel--left');
    }, 3000);

  setInterval(function() {
    $('.js-components__carousel-item--right:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.js-components__carousel--right');
    }, 4000);

  // button toggle
  // resize event
  function resizeHandler() {
    var win = $(this); 
      if (win.width() < 769) {
        $('.overlay').on('click', function(){        
          $(".overlay").addClass("hide");
          $(".sidebar").addClass("collapse");
        });
      } else{
        $(window).unbind('scroll');
      }
    }
  resizeHandler();

  $(window).resize(resizeHandler);

  $(".js-sidebar__toggle-button").on("click", function(){
    $(".sidebar").toggleClass("collapse");
    $(".overlay").toggleClass("hide");
  });
});
