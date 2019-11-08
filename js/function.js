// 페이지 이동 클릭 이벤트
$(function(){
    var $header_logo = $('header>h1>a');
    var $footer_logo = $('footer>h2>a');
    var $gnb = $('#gnb>ul>li>a');
    var gnbIdx = 0;

    function ScrollTopMove(){
        $('html, body').stop().animate({
            scrollTop : 0
        }, 600);
    }

    //메뉴 클릭시 이동
    arrScrollTop = [];
    $('section>article').each(function(idx){
        arrScrollTop[idx] = ($(this).offset().top) + 70;
    });
    console.log(arrScrollTop);

    $gnb.on('click', function(evt){
        evt.preventDefault();

        gnbIdx = $gnb.index(this);
        $('html, body').stop().animate({
            scrollTop : arrScrollTop[gnbIdx+1]
        });
    });

    $(window).on('scroll', function(){
        var scrollTop = $(window).scrollTop();

        for(var i=0; i<5; i++){
            if(i==4){
                if(scrollTop>=arrScrollTop[i+1]-500){
                    $gnb.eq(i).parent().addClass('on').siblings().removeClass('on');
                }
            }else{
                if(scrollTop>=arrScrollTop[i+1]-180){
                    $gnb.eq(i).parent().addClass('on').siblings().removeClass('on');
                }
            }
        }
        if(scrollTop<arrScrollTop[1]-500){
            $gnb.parent().removeClass('on');
        }
    });

    //헤더 로고 클릭
    $header_logo.on('click', function(evt){
        evt.preventDefault();
        ScrollTopMove();
    });

    //푸터 로고 클릭
    $footer_logo.on('click', function(evt){
        evt.preventDefault();
        ScrollTopMove();
    });
});

//본문내용 이벤트 구문
$(function(){
    var $introImg = $('#home>.intro_bg>.intro>.intro_img');
    var $introImg_shadow = $('#home>.intro_bg>.intro>.intro_shadow');
    var $otherSay_slide = $('#other_say>.cont>ul');
    var $pagination = $('#other_say>.pagination>ul>li>a');
    var $pagination_prev = $pagination.eq(0);
    var $pagination_next = $pagination.eq(1);

    //첫 화면 페이지 꽉 차게
    $('#home').height($(window).height());

    //intro
    $(window).on('load', function(){
        $introImg.stop().animate({
            left : 50 + '%'
        }, 800, 'easeOutBack');

        $introImg_shadow.delay().stop().animate({
            left : 50 + '%'
        }, 800, 'easeOutBack');
    });


    //skill chart 플러그인
    $('#skill .chart1').easyPieChart({
        barColor: '#48735b',
        trackColor: 'rgba(255,255,255,0.5)',
        scaleColor: '#fff',
        lineCap: 'butt',
        lineWidth: 30,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    $('#skill .chart2').easyPieChart({
        barColor: '#48735b',
        trackColor: 'rgba(255,255,255,0.5)',
        scaleColor: '#fff',
        lineCap: 'butt',
        lineWidth: 30,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    $('#skill .chart3').easyPieChart({
        barColor: '#48735b',
        trackColor: 'rgba(255,255,255,0.5)',
        scaleColor: '#fff',
        lineCap: 'square',
        lineWidth: 30,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });
    $('#skill .chart4').easyPieChart({
        barColor: '#48735b',
        trackColor: 'rgba(255,255,255,0.5)',
        scaleColor: '#fff',
        lineCap: 'square',
        lineWidth: 30,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });
    $('#skill .chart5').easyPieChart({
        barColor: '#48735b',
        trackColor: 'rgba(255,255,255,0.5)',
        scaleColor: '#fff',
        lineCap: 'square',
        lineWidth: 30,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
    });

    //other_say 
    $pagination_prev.on('click', function(evt){
        evt.preventDefault();

        if($(this).hasClass('on') == false){
            $otherSay_slide.stop().animate({
                left : 0
            });
            $(this).parent().addClass('on').siblings().removeClass('on');
        }    
    });

    $pagination_next.on('click', function(evt){
        evt.preventDefault();

        if($(this).hasClass('on') == false){
            $otherSay_slide.stop().animate({
                left : -1200
            });
            $(this).parent().addClass('on').siblings().removeClass('on');
        }   
    });

});

//라이트박스 이벤트 구문
$(function(){
	var $btn_more = $('#about_me>.cont>.profile>.more>h2>a');
	var $shadow = $('#about_me .more>.shadow');
	var $lightbox = $('#about_me .more>.lightbox');
	var $btn_award = $('#about_me .more>.lightbox>ul>li:first-child>a');
	var $btn_grade = $('#about_me .more>.lightbox>ul>li:last-child>a');
	var $award = $('#about_me .more>.lightbox>ul>li>.award');
	var $grade = $('#about_me .more>.lightbox>ul>li>.grade');
	var $btn_close = $('#about_me .more>.lightbox>button');

	$btn_more.on('click', function(evt){
		evt.preventDefault();

		$shadow.show();
		$lightbox.show();
	});

	$btn_award.on('click', function(evt){
		evt.preventDefault();

		$award.show();
		$grade.hide();
	});

	$btn_grade.on('click', function(evt){
		evt.preventDefault();

		$award.hide();
		$grade.show();
	});

	$btn_close.on('click', function(){
		$shadow.hide();
		$lightbox.hide();
	});
});


//포트폴리오 shuffle plugin 이벤트 구문
$(function(){
    var $grid = $('#portfolio>.grid');

    $grid.shuffle({
        itemSelector : '.item'
    });

    $('#portfolio>.filter>li>a').on('click', function(evt){
        evt.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

        var groupName = $(this).attr('data-group');
        $grid.shuffle('shuffle', groupName)
    });

});