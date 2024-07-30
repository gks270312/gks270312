$(document).ready(function(){

    // .cart .product .img .bottom li를 클릭했을 때,
    // li의 순번을 찾고
    // 해당 순번에 맞게 .cart .product .img .top p에 addClass
    // 해당 순번에 맞게 .cart .product .img .bottom a에 addClass
    $('.cart .product .img .bottom li').click(function(e){
        e.preventDefault()

        var a = $(this).index();
        // console.log(a)

        $('.cart .product .img .top p').removeClass('on')
        $('.cart .product .img .top p').eq(a).addClass('on')

        $('.cart .product .img .bottom a').removeClass('on')
        $('.cart .product .img .bottom a').eq(a).addClass('on')
    })




    // .popUp span을 클릭하면, .popUp_bg가 사라져라.
    $('.popUp span').click(function(){

        $('.popUp_bg').css({'display':'none'})
    })

    // .util 세 번째 li를 클릭하면, .popUp_ bg가 보여라.
    $('.util li').eq(2).click(function(e){
        e.preventDefault()

        $('.popUp_bg').css({'display':'flex'})
    })




    // .menu_img li를 클릭했을 때, sub가 보인다.

    $('.menu_img li').click(function(e){
        e.preventDefault()

        $('.main').fadeOut();
        $('.sub').fadeIn()

        $('html,body').scrollTop(0)
    })




    // .section2_inner .menu_img button을 클릭했을 때, 256px씩 왼쪽으로 움직여라.
    var b = 0;

    $('.section2_inner .menu_img button').click(function(){

        b++;
        // console.log(b)
        $('.section2_inner .menu_img li').eq(b-1).clone().appendTo('.section2_inner .menu_img ul');
        $('.section2_inner .menu_img ul').css({'left':-256*b})
        $('.section2_inner .menu_img li').removeClass('on')
        $('.section2_inner .menu_img li').eq(b+2).addClass('on')
    })

    // 자동으로 버튼을 클릭한 효과를 내라.
    var slide = setInterval(function(){

        $('.section2_inner .menu_img button').trigger('click')
    },2000)

    // 마우스가 올라가면 멈추고 마우스가 떠나면 움직여라.
    $('.section2_inner .menu_img ul').mouseenter(function(){

        clearInterval(slide)
    })

    $('.section2_inner .menu_img ul').mouseleave(function(){

        slide = setInterval(function(){
            $('.section2_inner .menu_img button').trigger('click')
    },2000)
    })




    // scrollTop값을 구하고,
    // 특정위치에서 addClass
    $(window).scroll(function(){

        var sc = $(this).scrollTop()
        // $('.main>p').text(sc)

        if(sc>=2000 && sc<=2800){
            $('.section3_inner .story_history .top1').addClass('on')
            $('.section3_inner .story_history .bottom1').addClass('on')
            $('.section3_inner .story_history .top2').addClass('on')
            $('.section3_inner .story_history .bottom2').addClass('on')
            $('.section3_inner .story_history .top3').addClass('on')
            $('.section3_inner .story_history .bottom3').addClass('on')
            $('.section3_inner .story_history .top4').addClass('on')
            $('.section3_inner .story_history .bottom4').addClass('on')
        }else{
            $('.section3_inner .story_history .top1').removeClass('on')
            $('.section3_inner .story_history .bottom1').removeClass('on')
            $('.section3_inner .story_history .top2').removeClass('on')
            $('.section3_inner .story_history .bottom2').removeClass('on')
            $('.section3_inner .story_history .top3').removeClass('on')
            $('.section3_inner .story_history .bottom3').removeClass('on')
            $('.section3_inner .story_history .top4').removeClass('on')
            $('.section3_inner .story_history .bottom4').removeClass('on')
        }
    })


})