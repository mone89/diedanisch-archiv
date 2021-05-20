//--------------- set_affix ----------------------//
function set_affix(){
  $('nav').affix({
    offset: {top: function() { return $('header').height()-50; }}
  });
}

//--------------- navbar_collapse ----------------------//
function navbar_collapse(){
  $('.nav a').on('click', function(){
      $('.btn-navbar').click(); //bootstrap 2.x
      $('.navbar-toggle').click() //bootstrap 3.x by Richard
  });
}

//--------------- smooth_scrolling ----------------------//
function smooth_scrolling(){

  //  bind scroll to anchor links
  $(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();

      // trigger scroll
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 900, function(){
      //  Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = id;
      });

          // if supported by the browser we can even update the URL.
      if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
      }
    }
  });

}

//--------------- Document ready ----------------------//
$(document).ready(function(){
  // Affix
  set_affix();
  smooth_scrolling();
  navbar_collapse();
});

//--------------- Window resize -----------------------//
$( window ).resize(function(){
  set_affix();
});



var Cookielaw = {

    createCookie: function (name, value, days) {
        var date = new Date(),
            expires = '';
        if (days) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    },

    createCookielawCookie: function () {
        this.createCookie('cookielaw_accepted', '1', 10 * 365);

        if (typeof (window.jQuery) === 'function') {
            jQuery('#CookielawBanner').slideUp();
        } else {
            document.getElementById('CookielawBanner').style.display = 'none';
        }
    }

};
