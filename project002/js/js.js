$(document).ready(function(){

    // .cart .product .img .bottom li를 클릭했을 때, li의 순번을 찾고 해당 순번에 맞게 .cart .product .img .top p가 보여라.
    $('.cart .product .img .bottom li').click(function(e){
        e.preventDefault()

        var a = $(this).index();
        console.log(a)
        $('.cart .product .img .top p').css({'display':'none'})
        $('.cart .product .img .top p').eq(a).css({'display':'block'})

        // .cart .product .img .bottom li를 클릭했을 때, li의 순번을 찾고 해당 순번에 맞게 .cart .product .img .bottom a의 보더값의 색이 바뀌어라.
        $('.cart .product .img .bottom a').css({'border':'none'})
        $('.cart .product .img .bottom a').eq(a).css({'border':'1px solid #C30E2F'})
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
    })
})