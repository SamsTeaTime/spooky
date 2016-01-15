// ;(function ( $, window, document, undefined ) {

//   "use strict";
//   var pluginName = "move",
//     defaults = {};

//   // The actual plugin constructor
//   function Plugin ( element, options ) {
//       this.$el = $(element);
//       this.settings = $.extend( {}, defaults, options, this.$el.data() );
//       this._defaults = defaults;
//       this._name = pluginName;
//       this.init();
//   }
//   $.extend(Plugin.prototype, {
//     init: function () {
//       this.addEventListeners();
//     },
//     addEventListeners: function() {
//       this.$el.on('hover', this.moveGhostLeft());
//       console.log(this.$el);
//     },
//     moveGhostLeft: function() {
//       // $('spooky').css({'left', '30%'})
//       console.log('test2');
//     }
//   });

//   // A really lightweight plugin wrapper around the constructor,
//   // preventing against multiple instantiations
//   $.fn[ pluginName ] = function ( options ) {
//     return this.each(function() {
//       if ( !$.data( this, "plugin_" + pluginName ) ) {
//         $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
//       }
//     });
//   };

// })( jQuery, window, document );