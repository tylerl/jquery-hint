/* 
 * jQuery hint extension.
 *    Displays "hint" watermark on input boxes if no other value is present.
 *
 * Author: Tyler Larson <devel@tltech.com>
 * Copyright: Tyler Larson 2012
 * License: GPLv2 <http://www.gnu.org/licenses/gpl-2.0.html>
 */
(function($) {
	$.fn.hint = function(options) {
		var settings = { 
			classon: 'hint',
			classoff: '',
			attr: 'hint',
			text: ''
		}
		if (options) $.extend(settings,options);
		
		function hintText($field) {
			return (settings.text) ? settings.text : $field.attr(settings.attr);
		}
		
		function clearHint($field) {
			if (settings.classon && $field.hasClass(settings.classon)) $field.removeClass(settings.classon);
			if (settings.classoff) $field.addClass(settings.classoff);			
			if (hintText($field) == $field.val()) $field.val('');
		}
		
		function addHint($field) {
			if (!$field.val()) {
				$field.val(hintText($field));
				if (settings.classoff && $field.hasClass(settings.classoff)) $field.removeClass(settings.classoff);
				if (settings.classon) $field.addClass(settings.classon);			

			}
		}
		
		return this.each(function() {
			var $field = $(this);
			if (hintText($field)) {
				addHint($field);
				$field
					.focus(function() { clearHint($(this)); })
					.blur(function() { addHint($(this)); })
					.closest('form').submit(function() { clearHint($field); });
			}
		});
	}
})(jQuery);
