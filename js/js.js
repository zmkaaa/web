function percent(percent) {
    if (percent > 100) {
        percent = 0;
        $('.persentdiv').removeClass('clip-auto');
        $('.persentright').addClass('wth0');
    } else if (percent > 50) {
        $('.persentdiv').addClass('clip-auto');
        $('.persentright').removeClass('wth0');
    }
    $('.persentleft').css("transform", "rotate(" + 3.6 * percent + "deg)");
    $('.num').text(percent + "%");
}
percent(90);


function percent1(percent1) {
    if (percent1 > 100) {
        percent1 = 0;
        $('.persentdiv1').removeClass('clip-auto1');
        $('.persentright1').addClass('wth01');
    } else if (percent1 > 50) {
        $('.persentdiv1').addClass('clip-auto1');
        $('.persentright1').removeClass('wth01');
    }
    $('.persentleft1').css("transform", "rotate(" + 3.6 * percent1 + "deg)");
    $('.num1').text(percent1 + "%");
}
percent1(90);

function percent2(percent2) {
    if (percent2 > 100) {
        percent2 = 0;
        $('.persentdiv2').removeClass('clip-auto2');
        $('.persentright2').addClass('wth02');
    } else if (percent2 > 50) {
        $('.persentdiv2').addClass('clip-auto2');
        $('.persentright2').removeClass('wth02');
    }
    $('.persentleft2').css("transform", "rotate(" + 3.6 * percent2 + "deg)");
    $('.num2').text(percent2 + "%");
}
percent2(50);
function percent3(percent3) {
    if (percent3 > 100) {
        percent3 = 0;
        $('.persentdiv3').removeClass('clip-auto3');
        $('.persentright3').addClass('wth03');
    } else if (percent3 > 50) {
        $('.persentdiv3').addClass('clip-auto3');
        $('.persentright3').removeClass('wth03');
    }
    $('.persentleft3').css("transform", "rotate(" + 3.6 * percent3 + "deg)");
    $('.num3').text(percent3 + "%");
}
percent3(50);