/**
 * jquery.highlight.js
 */

(function ($) { //  플러그인을 감쌈
    // jQuery 별칭으로 사용되는 $ 기호가 되도록
    // 함수의 매개변술호 $를 선언  >>  11
    $.fn.highlight = function () {
        return this.each(function () {
            //  플러그인으로 동작할 로직을 설정
            var $element = $(this);
            $element.css('color', 'red')
                .css('background', 'yellow');
        })
    }
})(jQuery);
//11 >> 전역변수 $를 선언하여 문자열 값을 대입하면 jQuery정의를 엎어 쓰게 되며
//      준비된 핸들러의 alert함수에서 $를 출력하도록 하면 전역변수로 선언된 $ 값이 출력