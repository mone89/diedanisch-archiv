//--------------- textarea_expand ----------------------//
function textarea_expand(){
  // Applied globally on all textareas with the "autoExpand" class
  $(document)
      .one('focus.autoExpand', 'textarea.autoExpand', function(){
          var savedValue = this.value;
          this.value = '';
          this.baseScrollHeight = this.scrollHeight;
          this.value = savedValue;
      })
      .on('input.autoExpand', 'textarea.autoExpand', function(){
          var minRows = this.getAttribute('data-min-rows')|0, rows;
          this.rows = minRows;
          rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 20);
          this.rows = minRows + rows;
      });
}


//--------------- adjust_pills ----------------------//
function adjust_pills(){

  var footer_height = 0
  var body_height = 0
  $(".radio-batch").each(function(index) {
    var footer = $(this).children('.panel-footer')
    var body   = $(this).children('.panel-body')
    $(footer).css({
      "height": "100%",
      "min-height": "100%",
    });
    if( $(footer).outerHeight() > footer_height ){
      footer_height = $(footer).outerHeight()
    };
    $(body).css({
      "height": "100%",
      "min-height": "100%",
    });
    if( $(body).outerHeight() > body_height ){
      body_height = $(body).outerHeight()
    };
  });


  $(".radio-batch").each(function(index) {
    $(this).children('.panel-footer').css({
      "height": footer_height + "px",
      "min-height": footer_height + "px",
    });
    $(this).children('.panel-body').css({
      "height": body_height + "px",
      "min-height": body_height + "px",
    });
  });


}

//--------------- swipes ----------------------//
function swipes(){
  // init
  var controller = new ScrollMagic.Controller();

  $(".swipe-right").each(function(index) {
    var obj_id = $(this).attr('id');
    // Set up animation
    var tween = new TweenMax.fromTo("#"+obj_id, 0.5, {x: '100%'},{x:'0%'});
  // Create the Scene and trigger when visible
    var scene = new ScrollMagic.Scene({
      triggerElement: "#"+obj_id,
      triggerHook: 'onEnter',
      offset: "200%",
      reverse: false,
    })
    .setTween(tween)
    .addTo(controller);
  });

  $(".swipe-left").each(function(index) {
    var obj_id = $(this).attr('id');
    // Set up animation
    var tween = new TweenMax.fromTo("#"+obj_id, 0.5, {x: '-100%'},{x:'0%'});
  // Create the Scene and trigger when visible
    var scene = new ScrollMagic.Scene({
      triggerElement: "#"+obj_id,
      triggerHook: 'onEnter',
      offset: "200%",
      reverse: false,
    })
    .setTween(tween)
    .addTo(controller);
  });

}

//--------------- radio_scroll ----------------------//
function batch_scroll(){
  // init
  var controller = new ScrollMagic.Controller();

  $(".radio-batch").each(function(index) {
    var batch_id = $(this).attr('id');
    // Set up animation
    var tween = new TweenMax.fromTo("#"+batch_id, 1. , {y: '70%'},{y:'0%'});
  // Create the Scene and trigger when visible
    var scene = new ScrollMagic.Scene({
      triggerElement: "#einschalten",
      triggerHook: 'onEnter',
      offset: "-40%",
      reverse: false,
    })
    .setTween(tween)
    .addTo(controller);
  });
}

//--------------- Document ready ----------------------//
$(document).ready(function(){
  adjust_pills();
  swipes();
  batch_scroll();
  textarea_expand();
});

//--------------- Window resize -----------------------//
$( window ).resize(function(){
  adjust_pills();
});
