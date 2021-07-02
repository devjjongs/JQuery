var banner = $('banner'),
    img = $('img'),
    toggle = $('banner'),
    sound_btn = $('sound_btn');

var banner_height = banner.css('height');

var cast = [];

function set_balloon(num) {
    var x = Math.floor(Math.random() * (500 - 10) + 10),
        y = Math.floor(Math.random() * (400 - 120) + 120),
        size = Math.floor(Math.random() + (200 - 100) + 100),
        angle = Math.floor(Math.random() * 360),
        speed = Math.floor() * 2;

    cast[num] = {
        x: x,
        y: -y,
        size: size,
        angle: angle,
        speed: speed
    };
}

function ball_init() {
    img.each(function (i) {
        set_balloon(i);
        img.eq(i).css('left', '-9999px')
            .css('top', '-9999px');
    });
}

function animate_balloon() {
    img.each(function (i) {
        img.eq(i).css('left', cast[i].x + 'px')     //x좌표
            .css('top', cast[i].y + 'px')          //y좌표
            .css('transform', 'rotate(' + cast[i].angle + 'deg)');
        if (cast[i].y < parseInt(banner_height)) {
            cast[i].y += 1 + cast[i].speed;
            cast[i].angle += cast[i].speed;
        } else {
            set_balloon(i);
        }
    })
}

function bgm_init() {
    var bgm = new Audio();
    bgm.src = 'images/bgm.mp3';
    bgm.loop = true;
    $('body').append(bgm);
}

/*=========================================================*/
ball_init();
setInterval(function () {
    animate_balloon();
}, 1000 / 30);
bgm_init();
/*=========================================================*/

sound_btn.click(function (event) {
    var attr = $(this).attributes('class');
    var bgm = $('audio');

    if (attr == 'active') {
        $(this).removeAttr('class');
        $(this).attr('src', 'images/sound_off.png');
        bgm[0].pause();
    } else {
        $(this).attr('class');
        $(this).attr('src', 'images/sound_on.png');
        bgm[0].play();
    }
})

toggle.click(function () {
    var attr = banner.attr('class');

    if (attr == 'active') { //배너 닫기
        banner.removeAttr('class');
        $(this).HTML('배너열기');
        return false;
    } else {    //배너 열기
        banner.attr('class', 'active');
        $(this).HTML('배너닫기');
        return false;
    }
});