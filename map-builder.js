/*eslint-env browser */
/*globals $ */

// Default size of map (in tiles)
var DEFAULT_WIDTH = 30;
var DEFAULT_HEIGHT = 15;
var mouseOn = false;
var current = 'grass';


var MapBuilder = function ($container, params) {
  this.$elem = $container;
  if (params === undefined) {
    var params = {
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT
    };
  } else {
    this.width = params.width;
    this.height = params.height;
  }
}

function onMouseEnter (e) {
      //change css attributes to current
      //store prev css
  var $this = $(this);
  $this.removeClass($this.data('attr'));
  $this.addClass(current);
  $this.data('new', current);

}

function onMouseOut (e) {
  var $this = $(this);
  $this.removeClass($this.data('new'));
  $this.addClass($this.data('attr'));
  mouseOn = false;
}

function onMouseDown (e) {
  mouseOn = true;
  var $this = $(this);
  $this.removeClass($this.data('new'));
  $this.addClass(current);
  $this.data('attr', current);
}

function onMouseUp (e) {
  mouseOn = false;
}



MapBuilder.prototype.setupPalette = function () {
    //set up listener to all swatch classes
  $('.swatch').click(function () {
    var $this = $(this);
    var removed = $('#map-builder').find('.selected');
    removed.removeClass('selected');
    $this.addClass('selected');
    current = this.classList[1];
    console.log(current);

  });
  
}

MapBuilder.prototype.setupMapCanvas = function () {
  for (var i = 0; i < 15; i++) {
    var $row = $('<div>');
    $row.addClass('row');
    for (var j = 0; j < 30; j++) {
      var $sw = $('<div>');
      $sw.addClass('tile swatch grass');
      $row.append($sw);
      $sw.data('attr', 'grass');
    }
    $('.map').append($row);
  }

  $('.tile').on('mouseenter', onMouseEnter);
  $('.tile').on('mouseout', onMouseOut);
  $('.tile').on('mousedown', onMouseDown);
  $('.tile').on('mouseup', onMouseUp);


}
