$(document).ready(function () {
    // 楼层跳转
    // var floors = $(`.beauty-area`);
    // var nav = $(`.mui-lift-nav-name`);
    // var tmdaohang = $(`.tmdaohang`);
    // var color = [`#FF80D8`, `#25C9FF`, `#60FF56`, `#FF565D`, `#32FF81`, `#FFC729`, `#FF0036`];
    // var navpar = $(`.Mercer`);
    // var back = $(`.back-top`)
    // $(window).on("scroll" ,function () {
    //     var ft = $(`.fp-lift`)
    //     var flag=true
    //     var flag1=true
    //     $(back).on("click" ,function () {
    //         animate(document.documentElement, {scrollTop: 0})
    //     });
    //     var scrolltop =$("body").scrollTop()
    //     if (scrolltop > 1000) {
    //         if (flag) {
    //             flag = false;
    //
    //             $(navpar).animate( {"width": 35, "height": 333, "opacity": 1},"slow", function () {
    //                 flag1 = true;
    //                 $(ft).css(`display` ,`block`)
    //             },100)
    //         }
    //     } else if (flag1){
    //             flag1 = false;
    //         $(navpar).animate( {"width": 0, "height": 0, "opacity": 0},"slow",function () {
    //                 flag = true;
    //                 $(ft).css(`display` , `none`)
    //             })
    //         }
    //
    //     floors.each(function (index,value) {
    //         if (scrolltop >= value.offsetTop - 300) {
    //             for (var i = 0; i < nav.length; i++) {
    //                 $(nav[i]).removeClass(`active`);
    //                 $(nav[i]).css("background","rgba(0,0,0,0)");
    //             }
    //             $(nav[index]).addClass(`active`);
    //             $(nav[index]).css("background" , color[index])
    //         }
    //     })
    //     if (scrolltop > 1000) {
    //         $(tmdaohang).css(`display` , `block`)
    //         $(tmdaohang).css( `height`,50)
    //
    //     } else {
    //         $(tmdaohang).css(`display` , `none`)
    //         $(tmdaohang).css( `height`,0)
    //     }
    // })
    // nav.each(function (index,value ) {
    //     $(value).on("click",function () {
    //         $(nav).animate({scrollTop: floors[index].offsetTop},"slow");
    //     })
    // })

    var box = $(`.banner-main`)
    var lis = $(`.foucs-link`)
    var point = $(`.tg-point li`)
    var now = 0,// 当前的下标
        next = 0;//下一个的下标
    var flag = true;

    function flg() {   //控制开关
        flag = true
    }

    function le() {  //图片由右向左进行
        $(lis[now]).animate({opacity: 0}, "slow", flg);
        $(lis[next]).animate({opacity: 1}, "slow", flg);
    }

    function ri() {   //图片由左向右进行
        $(lis[now]).animate({opacity: 0}, "slow", flg);
        $(lis[next]).animate({opacity: 1}, "slow", flg);
    }

    function add() {  //轮播点添加变化
        point[now].classList.remove(`on`);
        point[next].classList.add(`on`);
        now = next
    }

    function move(way = `l`) {
        if (way == `l`) {
            next = now + 1;
            if (next > lis.length - 1) {
                next = 0;
            }
            le()
        } else if (way == `r`) {
            next = now - 1;
            if (next < 0) {
                next = lis.length - 1;
            }
            ri()
        }
        add()
    }

    var t = setInterval(move, 3000);
    $(box).on("mouseover", function () {
        clearInterval(t);
    })
    $(box).on("mouseout", function () {
        t = setInterval(move, 3000)
    });
    point.each(function (index, value) {
        $(value).on("mouseover", function () {
            if (flag) {
                flag = false;
                next = index;
                if (now < index) {
                    le();
                    add();
                } else if (now > index) {
                    ri();
                    add();
                } else {
                    flag = true;
                }
            }
        })
    })

    var a = $(`.carf`);
    var b = $(`.xxk`);
    a.each(function (index, vaule) {
        $(vaule).on("mouseover", function () {
            for (var i = 0; i < a.length; i++) {
                $(a[i]).removeClass("active-aside");
                $(b[i]).removeClass("active-aside");
            }
            $(this).addClass("active-aside");
            $(b[index]).addClass("active-aside");
        })
        $(vaule).on("mouseout", function () {
            for (var i = 0; i < a.length; i++) {
                $(a[i]).removeClass("active-aside");
                $(b[i]).removeClass("active-aside");
            }
        })
    })
    function fun() {
    let nr = $('.nrbox')
    let fs = $('.nav1')
    let ac = $('.mui-lift-nav-name')
    let title = $('.tmall-top')
    let fl = $('.Mercer')
    let back = $('.back-top')
    let cltop = $('.cltop');
    let flag2 = true;
    let flag3 = false;
    let colors = [`#FF80D8`, `#25C9FF`, `#60FF56`, `#FF565D`, `#32FF81`, `#FFC729`, `#FF0036`];
    let now = 0;
    let up = true;
    let down = false;
    $(window).on("scroll", function () {
        var sh =$(document).scrollTop()
        if (sh >= $(nr[0]).offset().top- 400) {
            if (up) {
                up = false;
                $(title).animate({top: 0},200)
                $(fl).animate({width: 35, height: 333,opacity:1}, function () {
                    down = true;
                })
            }
        }
        else {
            if (down) {
                down = false;
                $(title).animate({top: -50}, "slow")
                $(fl).animate({width: 0, height: 0, opacity:0}, "slow", function () {
                    up = true;
                })
            }
        }

        $(cltop).on("click", function (e) {
            e.preventDefault()
            animate(document.body,{scrollTop:0})
            animate(document.documentElement,{scrollTop:0})
        })

        nr.each(function (index,vaule) {
            if (sh >= vaule.offsetTop - 400) {
                fs.each(function (val) {
                    $(fs).css("backgroundColor", "")
                })
                $(fs[index]).css("backgroundColor", colors[index])
                now = index

            }
        // console.log(colors[index])
        })
        $(back).on("click", function (e) {
            e.preventDefault()
            // $(back).animate({scrollTop: 0}, "slow")
            animate(document.body,{scrollTop:0})
            animate(document.documentElement,{scrollTop:0})
        })
    })
    fs.each(function (index, vaule) {
            $(vaule).on("click", function (e) {
                e.preventDefault();
            $("body,html").animate({scrollTop: nr[index].offsetTop - 100}, function () {
                now = index;
            })
        })
        $(vaule).on("mouseover", function () {
            $(fs[index]).css("backgroundColor", colors[index])
            $(ac[index]).css("backgroundColor", "")
        })
        $(vaule).on("mouseout", function () {
            if (index != now) {
                $(fs[index]).css("backgroundColor", "")
            }
        })
    })
}
fun()
    // function floor(){
    //     let nr=document.querySelectorAll('.nrbox')
    //     let fs=document.querySelectorAll('.nav1')
    //     let ac=document.querySelectorAll('.mui-lift-nav-name')
    //     let title=document.querySelector('.tmall-top')
    //     let fl=document.querySelector('.Mercer')
    //     let back=document.querySelector('.back-top')
    //     let cltop=document.querySelector('.cltop')
    //     let  flag2=true;
    //     let  flag3=false;
    //     let colors = [`#FF80D8`, `#25C9FF`, `#60FF56`, `#FF565D`, `#32FF81`, `#FFC729`, `#FF0036`];
    //     let now=0;
    //     let up=true;
    //     let down=false;
    //     window.onscroll=function(){
    //         var obj=$("body").scrollTop()
    //         var sh=obj.scrollTop
    //         if(sh>=nr[0].offsetTop-400){
    //             if(up){
    //                 up=false;
    //                 animate(title,{top:0},200)
    //                 animate(fl,{width: 35, height: 333, opacity: 1},function(){
    //                     down=true;
    //                 })
    //             }
    //         }
    //         else{
    //
    //             if(down){
    //                 down=false;
    //                 animate(title,{top:-50})
    //                 animate(fl,{width: 0, height: 0, opacity: 0},function(){
    //                     up=true;
    //                 })
    //             }
    //         }
    //
    //         cltop.onclick=function(){
    //             animate(document.body,{scrollTop:0})
    //             animate(document.documentElement,{scrollTop:0})
    //         }
    //
    //         nr.forEach(function(f,index){
    //             if(sh>=f.offsetTop-400){
    //                 fs.forEach(function(val){
    //                     val.style.background=''
    //                 })
    //                 fs[index].style.background=colors[index]
    //                 now=index
    //             }
    //         })
    //         back.onclick=function(){
    //             animate(document.body,{scrollTop:0})
    //             animate(document.documentElement,{scrollTop:0})
    //         }
    //     }
    //     fs.forEach(function(n,index){
    //         n.onclick=function(){
    //             animate(document.body,{scrollTop:nr[index].offsetTop-100},function(){
    //                 now=index;
    //             })
    //             animate(document.documentElement,{scrollTop:nr[index].offsetTop-100},function(){
    //                 now=index;
    //             })
    //         }
    //         n.onmouseover=function(){
    //             fs[index].style.background=colors[index]
    //             ac[index].style.backgroundColor=''
    //         }
    //         n.onmouseout=function(){
    //             if(index!=now){
    //                 fs[index].style.background=''
    //             }
    //         }
    //     })
    // }
    // floor( )
})