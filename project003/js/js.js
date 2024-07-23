$(document).ready(function(){

    // nav li를 클릭했을 때,
    // 1. 순번찾기
    // 2. 클릭한 순번에 맞게 article에게 addClass
    // 3. 클릭한 순번에 맞게 nav li에게 addClass

    $('nav li').click(function(){

        var a = $(this).index()
        console.log(a)

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
    // 3. 순번에 맞게 .gal_img>div에 addCalss
    // 4. .gal_img>div>p가 rotate360deg

    $('.gal_menu li').click(function(){

        var c = $(this).index()

        $('.gal_menu li').removeClass('on')
        $('.gal_menu li').removeClass('on2')
        $('.gal_menu li').eq(c).addClass('on')

        $('.gal_inner').addClass('on')

   
        $('.gal_img>div').removeClass('on')
        $('.gal_img>div').eq(c).addClass('on')


        $('.gal_img>div>p').css({'transform':'rotateY(0deg)'});
            setTimeout(function(){
            $('.gal_img>div.on>p').css({'transform':'rotateY(360deg)'});
            },10);
        // $('.gal_img>div>p').css({'transform':'rotateY(0deg)'}).stop().animate({'transform':'rotateY(360deg)'})
    
    })




    // .gal_menu 두 번째 li를 클릭했을 때,
    $('.gal_menu li').eq(1).click(function(){

        $(this).removeClass('on')
        $(this).addClass('on2')

        $('.gal_inner').removeClass('on')
    })




    // 스크롤값을 찾아서 .filmo_img ul의 left값에 대입한다.
    $(window).scroll(function(){

        var sc = $(window).scrollTop()
        // console.log(sc)
        // $('.body').addClass('on')
        $('.filmo_img ul').css({'left':-sc})
    })

    $('nav li').eq(3).click(function(){

        $('body').addClass('on')
    })




    // .filmo_img li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .filmo_info li에 addClass
    $('.filmo_img li').click(function(){

        var d = $(this).index()

        $('.filmo_info li').removeClass('on')
        $('.filmo_info li').eq(d).addClass('on')
    })




    // .videoBox .video_menu li를 클릭했을 때,
    // 1. 순번을 찾고
    // 2. 순번에 맞게 .videoBox .video_play iframe에 addClass
    $('.videoBox .video_menu li').click(function(){

        var f = $(this).index()

        $('.videoBox .video_play iframe').removeClass('on')
        $('.videoBox .video_play iframe').eq(f).addClass('on')

    })

})