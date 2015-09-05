(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
  
    var $t            = $(this);
    var $w            = $(window);
    var viewTop       = $w.scrollTop();
    var viewBottom    = viewTop + $w.height();
    var _top          = $t.offset().top;
    var _bottom       = _top + $t.height();
    var compareTop    = partial === true ? _bottom : _top;
    var compareBottom = partial === true ? _top : _bottom;
  
    // console.log('compareBottom', compareBottom, 'viewBottom', viewBottom, 'compareTop', compareTop, 'viewTop', viewTop);
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    // return ((compareTop <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(document).ready(function () {

  var win = $(window);

  var allMods = $(".module");
  var firstNode = 0;
  console.log(firstNode);

  // to add class already-visible to the elements which are in the viewport on loading and finding the first element in the viewport
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      // console.log('element', i);
      el.addClass("already-visible"); 
      if(firstNode < i)
        firstNode = i;
    } 
  });

  // console.log(firstNode);

  // to ensure that all the elements before the first element in view port have been added class already-visible
  allMods.each(function(i, el) {
    
    var el = $(el);
    if (i <= firstNode) {
      // console.log('check', i);
      el.addClass("already-visible"); 
    } 
  });

  // to add animation class 
  win.scroll(function(event) {
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

});