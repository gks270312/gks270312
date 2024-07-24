$(document).ready(function(){

    // nav li를 클릭했을 때,
    // 1. 순번찾기
    // 2. 클릭한 순번에 맞게 article에게 addClass
    // 3. 클릭한 순번에 맞게 nav li에게 addClass

    $('nav li').click(function(){

        var a = $(this).index()
        // console.log(a)

        $('section article').removeClass('on')
        $('section article').eq(a).addClass('on')

        $('nav li').removeClass('on')
        $('nav li').eq(a).addClass('on')
    })




    // nav 첫 번째 li를 클릭했을 때, h1에게 addClass
    $('nav li').eq(0).click(function(){

        $('h1').addClass('on')
    })


    // // nav 두 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(1).click(function(){

    //     $('h1').removeClass('on')
    // })
    // // nav 세 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(2).click(function(){

    //     $('h1').removeClass('on')
    // })
    // // nav 네 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(3).click(function(){

    //     $('h1').removeClass('on')
    // })
    // // nav 다섯 번째 li를 클릭했을 때, h1에게 removeClass
    // $('nav li').eq(4).click(function(){

    //     $('h1').removeClass('on')
    // })

    // nav 2~5번째 li를 클릭했을 때, h1에게 removeClass
    for(var b=1; b<5; b++){

        $('nav li').eq(b).click(function(){

            $('h1').removeClass('on')
        })
    }




    // .gal_menu li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .gal_menu li에 addClass
    // 3. 순번에 맞게 .gal_img>div에 addClass

    $('.gal_menu li').click(function(){

        var c = $(this).index()

        $('.gal_menu li').removeClass('on')
        $('.gal_menu li').removeClass('on2')
        $('.gal_menu li').eq(c).addClass('on')

        $('.gal_inner').addClass('on')

   
        $('.gal_img>div').removeClass('on')
        $('.gal_img>div').eq(c).addClass('on')


        // $('.gal_img>div>p').css({'transform':'rotateY(0deg)'});
        //     setTimeout(function(){
        //     $('.gal_img>div.on>p').css({'transform':'rotateY(360deg)'});
        //     },10);
        // $('.gal_img>div>p').css({'transform':'rotateY(0deg)'}).stop().animate({'transform':'rotateY(360deg)'})
    
    })




    // .gal_menu 두 번째 li를 클릭했을 때,
    $('.gal_menu li').eq(1).click(function(){

        $(this).removeClass('on')
        $(this).addClass('on2')

        $('.gal_inner').removeClass('on')
    })




    // 스크롤값을 찾아서 .filmo_center ul의 left값에 대입한다.
    $(window).scroll(function(){

        var sc = $(this).scrollTop()
        console.log(sc)
        $('.about>h2').text(sc)
        $('.filmo_center ul').css({'left':-sc})
    })


    $('nav li').eq(3).click(function(){

        $('body').addClass('on')
    })
    $('nav li').eq(1).click(function(){

        $('body').removeClass('on')
    })





    // .filmo_center li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .filmo_center li>div에 addClass
    $('.filmo_center li').click(function(){

        var d = $(this).index()

        $('.filmo_center li>div').removeClass('on')
        $('.filmo_center li:nth-child('+(d+1)+')>div').addClass('on')
    })




    // .videoBox .video_menu li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .videoBox .video_play iframe에 addClass
    // 3. 순번에 맞게 자신에게 addClass
    $('.videoBox .video_menu li').click(function(){

        var f = $(this).index()

        $('.videoBox .video_play iframe').removeClass('on')
        $('.videoBox .video_play iframe').eq(f).addClass('on')

        $('.videoBox .video_menu li').removeClass('on')
        $(this).addClass('on')
    })




    // 윈도우에서 마우스가 움직일 때, x값과 y값을 찾아라.
    $(window).mousemove(function(e){

        var x = e.pageX;
        var y = e.pageY;
        // console.log(x)

        // x를 .video .mouse의 left값에 적용하고,
        // y를 .video .mouse의 top값에 적용한다.
        // 이 때, 위치값을 잡아준다.
        $('.video .mouse').css({'left':x-20,'top':y-20})


        // .chick에 마우스가 들어갔을 때, .video .mouse에 addClass
        $('.chick').mouseenter(function(){

            $('.video .mouse').addClass('style1')
        })

        $('.chick').mouseleave(function(){

            $('.video .mouse').removeClass('style1')
        })
    })

})