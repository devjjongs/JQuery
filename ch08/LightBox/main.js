$(function () {
    var indicator = $(".indicator button");
    var lightbox = $("#lightbox");
    var block = $("#block");

    //라이트박스 열기
    function lightbox_open(num) {
        lightbox.addClass("active");
        block.addClass("active");
        change_img(num);
        indicator.eq(num).focus();
    }


    //라이트박스 닫기
    function lightbox_close() {
        lightbox.removeAttr("class");
        block.removeAttr("class");
    }


    function change_img(idx) {
        var imgs = $("figure > img");
        for (var i = 0; i < imgs.length; i++) {
            imgs.eq(i).removeAttr("class");
        }
        imgs.eq(idx).attr("class", "active")
    }


    //이미지를 클릭했을 때
    $("img.thumb").click(function () {
        var img_num = $(this).index() - 1;
        lightbox_open(img_num);
    })


    //X버튼을 눌렀을 때
    $(".btn-close").click(function () {
        lightbox_close();
    });


    indicator.click(function () {
        var img_num = $(this).index();
        change_img(img_num);
    })
});