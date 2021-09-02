$(function(){
    //Typing Animation
    new TypeIt(".typing", {
        speed: 160,
        loop: false
    }).go();

    skillFlag = 1;
    // scroll 이벤트
    $(window).scroll(function(){
        curr = $(this).scrollTop();

    // Navbar
    header = $('.header').height();
    if(header < curr) {
        $('.header').addClass('on')
    }else {
        $('.header').removeClass('on')
    }

    // Arrow up button
    home = $('.home').offset().top ;
    if(home < curr) {
        $('.arrow-up').addClass('on')
    } else {
        $('.arrow-up').removeClass('on')
    }

    skill = $('.about_wrap .skills').offset().top - 400;

    if(curr > skill){
        if(skillFlag == 1){
            skillAni();
            skillFlag = 0;
        }
    }
    });

    //Arrow-up btn
    $('.arrow-up').click(function(){
        $('html').animate({scrollTop : 0})
    })

    $('.header .navbar_item a').click(function(){
        el = $(this).data('target');
        eloff = $(el).offset().top;
        $('html,body').animate({scrollTop:eloff},300)
    })

    // TweenMax
    var controller = new ScrollMagic.Controller();

    function skillAni(){
        var skill = TweenMax.staggerFromTo('.about_wrap .skills ul li', 1,
        {
            opacity: 0,
            y:100,
        },
        {
            opacity: 1,
            y:0,
        },
        0.3 //각각의 모션의 속도
        );
    }

    var main_txt = TweenMax.fromTo(".home .txt_wrap .typing,.home .txt_wrap .desc", 0.4, {
        y: '0',
        opacity:1,
        webkitFilter:"blur(0px)",
    }, {
        y: '50%',
        opacity:0,
        webkitFilter:"blur(3px)",
    })

    var scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: '100%',
    offset: $(window).height()/1.3,
    })
    .setTween(main_txt)
    .addTo(controller)
    // .addIndicators({
    //   name: "1"
    // });

    var scene = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: '100%',
    offset: $(window).height()/1.3,
    })
    .setTween(main_txt)
    .addTo(controller)
    // .addIndicators({
    //   name: "1"
    // });



    var txt01 = TweenMax.fromTo(".sub_txt.txt01", 0.6, {
        x: '20%'
    }, {
        x:'-100%'
    })

    var scene = new ScrollMagic.Scene({
        triggerElement: ".about_wrap .profile_detail",
        duration: '100%'
        })
        .setTween(txt01)
        .addTo(controller)
        // .addIndicators({
        //   name: "1"
        // });

    var txt02 = TweenMax.fromTo(".sub_txt.txt02", 0.6, {
        x: 0
        }, {
            x:'150%'
        })

        var scene = new ScrollMagic.Scene({
            triggerElement: ".skills ul",
            duration: '100%'
        })
        .setTween(txt02)
        .addTo(controller)
    //     .addIndicators({
    //         name: "1"
    // });
//
//
    var txt03 = TweenMax.fromTo(".sub_txt.txt03", 0.6, {
        x: 0
        }, {
            x:'-150%'
        })

        var scene = new ScrollMagic.Scene({
            triggerElement: ".work_item.item01",
            duration: '100%'
        })
        .setTween(txt03)
        .addTo(controller)
    //     .addIndicators({
    //         name: "1"
    // });

    var txt04 = TweenMax.fromTo(".sub_txt.txt04", 0.6, {
        x: 0
        }, {
            x:'150%'
        })

        var scene = new ScrollMagic.Scene({
            triggerElement: ".work_item.item02",
            duration: '100%'
        })
        .setTween(txt04)
        .addTo(controller)
    //     .addIndicators({
    //         name: "1"
    // });

    var txt05 = TweenMax.fromTo(".sub_txt.txt05", 0.6, {
        x: 0
        }, {
            x:'-150%'
        })

        var scene = new ScrollMagic.Scene({
            triggerElement: ".work_item.item03",
            duration: '100%'
        })
        .setTween(txt05)
        .addTo(controller)
    //     .addIndicators({
    //         name: "1"
    //      });

    $('body').mousemove(function(e) {
        TweenMax.to($('#cursor'), 0.5, {
            x: e.clientX,
            y: e.clientY,
            ease: Power3.easeOut
        });
    });

    //AOS Animation
    AOS.init();

    //animation01
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.about_wrap').offset().top - $(window).height() / 4;
        if(curr > target) {
            $('.about_wrap .profile_detail .title strong').addClass('on');
        }
    })
})
