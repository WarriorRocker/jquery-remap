/*---------------------------------------------------------------*\
|  jQuery Responsive Dynamic Image Map Remapper                   |
|  Version 1.0 Created By: Travis Brown                           |
\*---------------------------------------------------------------*/
(function($) {
	var methods = {
		init: function() { 
			return this.each(function() {
				$('map[name='+$(this).attr('usemap').replace('#', '')+'] area').each(function () {
					$(this).attr('data-remap-coords', $(this).attr('coords'));
				});
				var image = this;
				this.loadImage = new Image();
				this.loadImage.onload = function () {
					image.setAttribute('data-remap-width', this.width);
					methods.update.apply(image);
					$(window).bind('resize.remap', $.proxy(function(e) {
						methods.update.apply(this);
					}, image));
				};
				this.loadImage.src = $(this).attr('src');
			});
		}, update: function() {
			var image = $(this);
			if ((typeof image.attr('data-remap-width') != undefined) && (image.attr('data-remap-width'))) {
				$('map[name='+$(this).attr('usemap').replace('#', '')+'] area').each(function() {
					var pairs = $(this).attr('data-remap-coords').split(', ');
					for (var i = 0; i < pairs.length; i++) {
						var nums = pairs[i].split(',');
						for (var j = 0; j < nums.length; j++) {
							nums[j] = (parseFloat(nums[j]) * (image.width() / image.attr('data-remap-width')));
						}
						pairs[i] = nums.join(',');
					}
					$(this).attr('coords', pairs.join(', '));
				});
			}
		}
	};
	$.fn.remap = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this);
		} else {
			$.error('Method '+method+' does not exist on jQuery.remap');
		}
	};
})(jQuery);
