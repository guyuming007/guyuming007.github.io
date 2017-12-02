/**
 * Created by newuser on 2017/9/15.
 */
$(function(){
    var ps=$('.nav-first p');
    for(var i=0;i<ps.length;i++){
        ps.eq(i).hover(function(){
           $(this).addClass('red').siblings().removeClass();
        })
    }

    var divs=$('.main_contents .box .new_top div');
    console.log(divs);
    for(var j=0;j<divs.length;j++){
        divs.eq(j).mouseover(function(){
            $(this).children('span').eq(1).animate({
                opacity: 0.7,
                bottom:'-88px'
            },400)
            //$(this).children('span').eq(0).css({
            //    bottom:'-88px'
            //})
        })

        divs.eq(j).mouseover(function(){
            $(this).children('span').eq(1).animate({
                opacity: 0,
                bottom:'88px'
            },1)
            //$(this).children('span').eq(0).animate({
            //    bottom:0
            //},1000)
        })
    }
    var divs=$('.main_contents .box .new_bottom div');
    console.log(divs);
    for(var j=0;j<divs.length;j++){
        divs.eq(j).mouseover(function(){
            $(this).children('span').eq(1).animate({
                opacity: 0.7,
                bottom:'-88px'
            },400)
            //$(this).children('span').eq(0).css({
            //    bottom:'-88px'
            //})
        })

        divs.eq(j).mouseover(function(){
            $(this).children('span').eq(1).animate({
                opacity: 0,
                bottom:'88px'
            },1)
            //$(this).children('span').eq(0).animate({
            //    bottom:0
            //},1000)
        })
    }
})

