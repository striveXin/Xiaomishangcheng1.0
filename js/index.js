/**
 * Created by hama on 2017/7/31.
 */
$(function() {
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function (event) {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094');
    })
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#FF6700', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: '#424242'});
        $('.goods').stop(true, false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #000');
            $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none');
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange'
        })
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function () {
        if (flag) {
            $('.ser1 input').css({
                'border': '1px solid #000',
                'border-right': 'none'
            });
            $(this).css({
                'background': 'orange',
                'color': '#fff',
                'border': 'none'
            })
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $(this).css({
                'background': '#fff',
                'color': '#000',
                'border': '1px solid #ccc',
                'border-left': 'none'
            })
        }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange');
        $('.ser2').css('border-color', 'orange');
        $('.keywordsList').show().css('border-color', 'orange');
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').hide().css('border-color', '#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#FF6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay, 2000)
    $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoplay, 2000)
    });
    $('.direcL').click(function () {
        //上一张
        clearInterval(timer);
        num = num - 1;
        if (num < 0) {
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function () {
        //下一张
        clearInterval(timer);
        num = num + 1;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    })
    function displayImg() {
        $('.round li').eq(num).css('background', 'orange').siblings().css({
            'background': "#000",
            'opacity': '0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay() {
        num++;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    })

/*****************************************************************************************/

/********************明星单品点击事件******************/
//自动
    var fa = true
    setInterval(star, 10000)
    function star() {
        if (fa) {
            $('.picture').css('left', '-1226px')
            fa = false
        }
        else {
            $('.picture').css('left', '0px')
            fa = true
        }
    }
//手动
    $('.product-right').click(function () {
            $('.picture').css('left', '-1226px')
        })
    $('.product-left').click(function () {
            $('.picture').css('left', '0px')
        })
    $('.hardWare .hardwareLi li').mouseover(function () {
        $(this).css({'box-shadow': '0 0 28px rgb(170,170,170)', 'margin-top': '3px', 'margin-bottom': '7px'})
    }).mouseout(function () {
        $(this).css({'box-shadow': 'none', 'margin-top': '5px', 'margin-bottom': '5px'})
    })

/********************搭配********************/
//列表切换
    function tab(obj1,obj2) {
        $(obj1).mouseover(function () {
            $(this).addClass('borBottom').siblings().removeClass('borBottom')
            $(obj2).eq($(this).index()).removeClass('hide').siblings().addClass('hide')
        })
    }
    tab('.match section ul li ',' .matchRight >li')
    tab('.match-1 section ul li ','.match-1 .matchRight >li')
    tab('.match-2 section ul li ','.match-2 .matchRight >li')
//阴影
    $('.match .matchL').add('.match-1 .matchL').add('.match-2 .matchL').find('li').mouseover(function () {
        $(this).css({'box-shadow': '0 0 28px rgb(170,170,170)', 'margin-top': '6px', 'margin-bottom': '16px'
        }).mouseout(function () {
            $(this).css({'box-shadow': 'none', 'margin-top': '11px', 'margin-bottom': '11px'})
        })
    })
    $('.match .matchR').add('.match-1 .matchR').add('.match-2 .matchR').find('li').mouseover(function () {
        $(this).css({'box-shadow': '0 0 28px rgb(170,170,170)', 'margin-top': '6px', 'margin-bottom': '16px',
        })
        $(this).children('.slide').removeClass('hide')
        $(this).siblings().children('.slide').addClass('hide')
    })
    $('.match .matchR').add('.match-1 .matchR').add('.match-2 .matchR').find('li').mouseout(function () {
            $(this).css({'box-shadow': 'none', 'margin-top': '11px', 'margin-bottom': '11px'})
        $(this).children('.slide').addClass('hide')

    })
    $('.match .matchR .lastLi').add('.match-1 .matchR .lastLi').add('.match-2 .matchR .lastLi').mouseover(function () {
        $('this').css({'box-shadow': 'none', 'margin': '11px 5px;'})
    })

/********************推荐********************/
    var re = 0;
    var step = 0;
    $('.recommend-right').click(function () {
            if (re < 3){
                ++ re;
                step = (re * 1226) + 'px';
                $('.pic').css('left' , '-' +step);
            }
    })
    $('.recommend-left').click(function () {
        if (re >= 0){
            re --;
            step = (re * 1226) + 'px';
            $('.pic').css('left' , '-' + step);
        }
    })
//第一幅图
    var num4 = 0 ;
//点左右标签
    $('.borderOrange .p2R').click(function () {
        ++num4;
        if (num4 < 4){
            $('.matter li').eq(num4).removeClass('hide').siblings().addClass('hide')
            $('.borderOrange .list p').eq(num4).css({'background':'none', 'border':'2px solid rgb(255,103,0)'})
                .siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num4--;}})
    $('.borderOrange .p2L').click(function () {
        num4--;
        if (num4 >= 0){
            $('.matter li').eq(num4).removeClass('hide').siblings().addClass('hide')
            $('.borderOrange .list p').eq(num4).css({'background':'none', 'border':'2px solid rgb(255,103,0)'})
                .siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num4 ++;}})
//第二幅图
    var num1 = 0 ;
//点左右标签
    $('.borderGreen .p2R-1').click(function () {++num1;
    if (num1 < 4){
            $('.matter-1 li').eq(num1).removeClass('hide').siblings().addClass('hide')
            $('.borderGreen .list p').eq(num1).css({'background':'none', 'border':'2px solid rgb(255,103,0)'
            }).siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num1--;}})
    $('.borderGreen .p2L-1').click(function () {
        num1--;
        if (num1 >= 0){
            $('.matter-1 li').eq(num1).removeClass('hide').siblings().addClass('hide')
            $('.borderGreen .list p').eq(num1).css({'background':'none', 'border':'2px solid rgb(255,103,0)'})
                .siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num1 ++;}})
//第三幅图
    var num2 = 0 ;
//点左右标签
    $('.borderRed .p2R-2').click(function () {++num2;
    if (num2 < 4){
            $('.matter-2 li').eq(num2).removeClass('hide').siblings().addClass('hide')
            $('.borderRed .list p').eq(num2).css({'background':'none', 'border':'2px solid rgb(255,103,0)'})
                .siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num2--;}})
    $('.borderRed .p2L-2').click(function () {
        num2--;
        if (num2 >= 0){
            $('.matter-2 li').eq(num2).removeClass('hide').siblings().addClass('hide')
            $('.borderRed .list p').eq(num2).css({'background':'none', 'border':'2px solid rgb(255,103,0)'})
                .siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num2 ++;}})
//第四幅图
    var num3 = 0
//点左右标签
    $('.borderBlue .p2R-3').click(function () {
        ++num3;
        if (num3 < 4){
            $('.matter-3 li').eq(num3).removeClass('hide').siblings().addClass('hide')
            $('.borderBlue .list p').eq(num3).css({'background':'none', 'border':'2px solid rgb(255,103,0)'})
                .siblings().css({'background':'#999', 'border':'1px solid #999'})
        }else {num3--;}})
    $('.borderBlue .p2L-3').click(function () {
        num3--;
        if (num3 >= 0){
            $('.matter-3 li').eq(num3).removeClass('hide').siblings().addClass('hide')
            $('.borderBlue .list p').eq(num3).css({
                'width':'8px',
                'height':'8px',
                'background':'none',
                'border':'1px solid red'
            }).siblings().css({
                'width':'6px',
                'height':'6px',
                'background':'#999',
                'border':'1px solid #999'
            })
        }else {
            num3 ++;
        }
        // right('.matter-3 li','.borderBlue .list p',num4)
        // console.log(num4)
    })
})
/*************************************************************************************/