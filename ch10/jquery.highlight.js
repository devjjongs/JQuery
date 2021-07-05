/**
 * jquery.highlight.js
 */

(function ($) { //  플러그인을 감쌈
    $.fn.highlight = function () {
        return this.each(function () {
            //  플러그인으로 동작할 로직을 설정
            var $element = $(this);
            $element.css('color', 'red')
                .css('background', 'yellow');
        })
    }
})(jQuery);