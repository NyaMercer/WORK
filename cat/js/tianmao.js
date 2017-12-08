window.onload=function () {
    // 楼层跳转
    // var floors = document.querySelectorAll(`.beauty-area`);
    // var nav = document.querySelectorAll(`.mui-lift-nav-name`);
    // var tmdaohang = document.querySelector(`.tmdaohang`);
    // var color = [`#FF80D8`, `#25C9FF`, `#60FF56`, `#FF565D`, `#32FF81`, `#FFC729`, `#FF0036`];
    // var navpar = document.querySelector(`.Mercer`);
    // var back = document.querySelector(`.back-top`)
    // window.onscroll = function () {
    //     var ft = document.querySelector(`.fp-lift`)
    //     back.onclick = function () {
    //         animate(document.documentElement, {scrollTop: 0})
    //     };
    //     var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
    //     if (scrolltop > 1000) {
    //         if (flag) {
    //             flag = false;
    //
    //             animate(navpar, {width: 35, height: 333, opacity: 1}, function () {
    //                 flag1 = true;
    //                 ft.style.display = `block`
    //             },100)
    //         }
    //     } else if (flag1){
    //             flag1 = false;
    //             animate(navpar, {width: 0, height: 0, opacity: 0}, function () {
    //                 flag = true;
    //                 ft.style.display = `none`
    //             })
    //         }
    //     floors.forEach(function (value, index) {
    //         if (scrolltop >= value.offsetTop - 300) {
    //             for (var i = 0; i < nav.length; i++) {
    //                 nav[i].classList.remove(`active`);
    //                 nav[i].style.background = `rgba(0,0,0,0)`;
    //             }
    //             nav[index].classList.add(`active`);
    //             nav[index].style.background = color[index]
    //         }
    //     })
    //     if (scrolltop > 1000) {
    //         tmdaohang.style.display = `block`;
    //         tmdaohang.style.height = 50 + `px`;
    //
    //     } else {
    //         tmdaohang.style.display = `none`;
    //         tmdaohang.style.height = 0 + `px`;
    //     }
    // }
    // nav.forEach(function (value, index) {
    //     value.onclick = function () {
    //         animate(document.body, {scrollTop: floors[index].offsetTop});
    //         animate(document.documentElement, {scrollTop: floors[index].offsetTop});
    //     }
    // })

    var box = document.querySelector(`.banner-main`)
    var lis = document.querySelectorAll(`.foucs-link`),
        left = document.querySelector(`.left-arrow`),
        right = document.querySelector(`.right-arrow`);
    var width = parseInt(getComputedStyle(lis[0], null).width);
    var point = document.querySelectorAll(`.tg-point li`)
    var now = 0,// 当前的下标
        next = 0;//下一个的下标
    var flag = true;

    function flg() {   //控制开关
        flag = true
    }

    function le() {  //图片由右向左进行
        animate(lis[now], {opacity: 0}, flg);
        animate(lis[next], {opacity: 1}, flg);
    }

    function ri() {   //图片由左向右进行
        animate(lis[now], {opacity: 0}, flg);
        animate(lis[next], {opacity: 1}, flg);
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
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000)
    };
    point.forEach(function (value, index) {
        value.onmouseover = function () {
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
        }
    })

    function select(x, y) {
        var a = document.querySelectorAll(x);
        var b = document.querySelectorAll(y);
        a.forEach(function (value, index) {
            value.onmouseover = function () {
                for (var i = 0; i < a.length; i++) {
                    a[i].classList.remove("active-aside");
                    b[i].classList.remove("active-aside");
                }
                this.classList.add("active-aside");
                b[index].classList.add("active-aside");
            }
            value.onmouseout = function () {
                for (var i = 0; i < a.length; i++) {
                    a[i].classList.remove("active-aside");
                    b[i].classList.remove("active-aside");
                }
            }
        })
    }

    select(`.carf`, `.xxk`)

    function floor(){
        let nr=document.querySelectorAll('.nrbox')
        let fs=document.querySelectorAll('.nav1')
        let ac=document.querySelectorAll('.mui-lift-nav-name')
        let title=document.querySelector('.tmall-top')
        let fl=document.querySelector('.Mercer')
        let back=document.querySelector('.back-top')
        let cltop=document.querySelector('.cltop')
        let  flag2=true;
        let  flag3=false;
        let colors = [`#FF80D8`, `#25C9FF`, `#60FF56`, `#FF565D`, `#32FF81`, `#FFC729`, `#FF0036`];
        let now=0;
        let up=true;
        let down=false;
        window.onscroll=function(){
            var obj=document.body.scrollTop?document.body:document.documentElement
            var sh=obj.scrollTop
            if(sh>=nr[0].offsetTop-400){
                if(up){
                    up=false;
                    animate(title,{top:0},200)
                    animate(fl,{width: 35, height: 333, opacity: 1},function(){
                        down=true;
                    })
                }
            }
            else{

                if(down){
                    down=false;
                    animate(title,{top:-50})
                    animate(fl,{width: 0, height: 0, opacity: 0},function(){
                        up=true;
                    })
                }
            }

            cltop.onclick=function(){
                animate(document.body,{scrollTop:0})
                animate(document.documentElement,{scrollTop:0})
            }

            nr.forEach(function(f,index){
                if(sh>=f.offsetTop-400){
                    fs.forEach(function(val){
                        val.style.background=''
                    })
                    fs[index].style.background=colors[index]
                    now=index
                }
            })
            back.onclick=function(){
                animate(document.body,{scrollTop:0})
                animate(document.documentElement,{scrollTop:0})
            }
        }
        fs.forEach(function(n,index){
            n.onclick=function(){
                animate(document.body,{scrollTop:nr[index].offsetTop-100},function(){
                    now=index;
                })
                animate(document.documentElement,{scrollTop:nr[index].offsetTop-100},function(){
                    now=index;
                })
            }
            n.onmouseover=function(){
                fs[index].style.background=colors[index]
                ac[index].style.backgroundColor=''
            }
            n.onmouseout=function(){
                if(index!=now){
                    fs[index].style.background=''
                }
            }
        })
    }
    floor( )
}