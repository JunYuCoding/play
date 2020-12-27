$('.top').click(function () {
    $('body,html').animated({
        scrollTop:0
    },300)
})
    $(window).scroll(function () {
        if($(window).scrollTop()<100){
            $('.top').css('display','none')
        }else {
            $('.top').css('display','block')
        }
    })
