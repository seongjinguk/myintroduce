$(document).ready(function(){
    // 헤더 애니메이션
    $('.border')
    .animate({
        left: '-50%',
        top: 0,
        opacity: 0
    }, 500, 'linear').animate({
        left: '-15%',
        top: 0,
        opacity: 0.1
    }, 500, 'linear').animate({
        left: 0,
        top: 0,
        opacity: 1
    }, 500, 'linear')


    // 스킬 부분 

    let gauge_bar = ['95%','95%','85%','85%','80%','70%']
    let percent = ['95','95','85','85','80','70']
    let skill_color = ['#ec845a','#43b9f8','#7ac2eb','#eeaf4b','rgb(255 200 128)','rgb(128 58 189)']
    
    for (let i = 0; i < skill_color.length; i++) {
        $('.object').eq(i).css ({
            color: skill_color[i]
        });
        $('.gauge_bar').eq(i).css({
            backgroundColor: skill_color[i]
        });
    }
    $(window).on('scroll', function() {
        // 스킬 오프셋탑
        var headerBotOffset = $('.header_bot').offset().top;
        var scrollTop = $(window).scrollTop();

        // 포트폴리오 오프셋탑
        var skillBotOffset = $('.skill').offset().top;
        
        // about me 오프셋탑
        var pf_BotOffset = $('.pf_bot').offset().top;

        // contact 오프셋탑
        var con_BotOffset = $('.pr').offset().top;

        if (scrollTop >= headerBotOffset) {
            // 스킬 부분 
            $('.skill').fadeIn(1000); 
    
            $('.skill').animate({
                opacity: 1
            }, 1000, 'linear');
    
            $('.skill_item').each(function(i) {
                $(this).animate({
                    marginTop: 0
                }, (i * 100) + 500, 'linear');
            });
    
            $('.gauge_bar').each(function(i) {
                $(this).animate({
                    width: gauge_bar[i] 
                }, 1000);
            });
    
            $('.percent').each(function(i) {
                $(this).prop('Counter', 0).animate({
                    Counter: percent[i] 
                }, {
                    duration: 1000,
                    step: function(now) {
                        $(this).text(Math.ceil(now) + '%'); 
                    }
                });
            });
        }


        if (scrollTop >= (skillBotOffset + 300)) {
            // 포트폴리오 부분
        $('.portfolios').fadeIn(1000); 

        $('.portfolios').animate({
            opacity: 1
        }, 1000, 'linear');

        $('.pf_sec').each(function(i) {
            $(this).animate({
                marginTop: 0
              }, (i * 100) + 500, 'linear');
        });

        $('.pf_bot').each(function(i) {
            $(this).animate({
                'margin-left': 0
              }, (i * 100) + 500, 'linear');
        });
        }


        if (scrollTop >= (pf_BotOffset - 400)) {
            // 포트폴리오 부분
        $('.about_me').fadeIn(1000); 

        $('.about_me').animate({
            opacity: 1
        }, 1000, 'linear');

        $('.about_img').each(function(i) {
            $(this).animate({
                marginTop: 0
              }, (i * 100) + 500, 'linear');
        });

        $('.pf_bot').each(function(i) {
            $(this).animate({
                'margin-left': 0
              }, (i * 100) + 500, 'linear');
        });
        }

        if (scrollTop >= (con_BotOffset - 400)) {
            // 연락처 부분
        $('.contact').fadeIn(1000); 

        $('.contact').animate({
            opacity: 1
        }, 1000, 'linear');

        $('.contact_img').each(function(i) {
            $(this).animate({
                marginTop: 0
              }, (i * 100) + 500, 'linear');
        });

        $('.contact_txt').each(function(i) {
            $(this).animate({
                'margin-left': 0
              }, (i * 100) + 500, 'linear');
        });
        }
    });
});
