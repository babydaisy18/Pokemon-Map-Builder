/*eslint-env browser */
/*globals $ */

// The size of a swatch (in pixels)
var SWATCH_SIZE = 25;

// Utility function - checks if a given swatch name is walkable terrain.
var isTerrain = function (swatchType) {
  return [
    'grass', 'flowers-red', 'flowers-orange', 'flowers-blue', 'weed', 'weed-4x',
    'weed-small', 'weed-2x', 'field', 'sand-patch', 'sand', 'sand-nw', 'sand-n',
    'sand-ne', 'sand-w', 'sand-e', 'sand-sw', 'sand-s', 'sand-se',
    'sand-nw-inverse', 'sand-ne-inverse', 'sand-sw-inverse', 'sand-se-inverse'
  ].indexOf(swatchType) >= 0;
};

/*
 * Constructor for the player (Pikachu sprite).
 *
 * @param x - The beginning x coordinate (usually zero)
 * @param y - The beginning y coordinate (usually zero)
 * @param builder - The MapBuilder object, with information about the map.
 */
var Player = function (x, y, builder) {
  this.builder = builder;
  this.$map = builder.$elem.find('.map');

};
