window.onload=function () {
    //侧导航选项卡
        function select(x,y) {
            var a=document.querySelectorAll(x);
            var b=document.querySelectorAll(y);
            // console.log(a,b);
            a.forEach(function (value,index) {
                value.onmouseover=function () {
                    for(var i=0;i<a.length;i++){
                        a[i].classList.remove("active");
                        b[i].classList.remove("active");
                    }
                    this.classList.add("active");
                    b[index].classList.add("active");
                }
                value.onmouseout=function () {
                    for(var i=0;i<a.length;i++){
                        a[i].classList.remove("active");
                        b[i].classList.remove("active");
                    }
                }
            })
        }
        select(`.cedaohang li.cdhli`,`.cedaohang>li>div`);
        //配件，周边，搭配选项卡
        function select1(x,y) {
            var a=document.querySelectorAll(x);
            var b=document.querySelectorAll(y);
            // console.log(a,b);
            a.forEach(function (value,index) {
                value.onmouseover=function () {
                    for(var i=0;i<a.length;i++){
                        a[i].classList.remove("active");
                        b[i].classList.remove("active");
                        a[i].classList.remove("active2");
                    }
                    this.classList.add("active");
                    b[index].classList.add("active");
                    a[i].classList.add("active1");


                }
//                value.onmouseout=function () {
//                    for(var i=0;i<a.length;i++){
//                        a[i].classList.remove("active");
//                        b[i].classList.remove("active");
//                    }
//                }
            })
        }
        select1(`.matchli`,`.match`);
        select1(`.partsli`,`.parts`);
        select1(`.peripheryli`,`.periphery`);
    //顶部导航选项卡
    function select2(x,y,z) {
        var a=document.querySelectorAll(x);
        var b=document.querySelectorAll(y);
        var c=document.querySelector(z);
        // console.log(a,b,c);
        a.forEach(function (value,index) {
            value.onmouseover=function () {
                for(var i=0;i<a.length;i++){
                    // a[i].classList.remove("active");
                    b[i].classList.remove("active");
                }
                // this.classList.add("active");
                b[index].classList.add("active");
                // c.classList.add(`active`)
            }
        })
        document.querySelector(`.daohang`).onmouseover=function () {
            c.classList.add(`active`)
        }
        document.querySelector(`.daohang`).onmouseout=function () {
            c.classList.remove(`active`)
        }
    }
    select2(`.daohang>li`,`.navmenu`,`.navmenu1`)
    //头部大轮播
    var box=document.querySelector(`.tu`);
    var lis=document.querySelectorAll(`.tu>img`),
        left=document.querySelector(`.lunbozuo`),
        right=document.querySelector(`.lunboyou`);
    var point=document.querySelectorAll(`.lbd`);
    var next=0;
    var flag=true;
    function move(way=`l`) {
        if(way==`l`){
            next++;
        }else if(way==`r`){
            next--;
        }
        if(next==lis.length){
            next=0;
        }
        if(next==-1){
            next=lis.length-1;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.remove(`active`)
            point[i].classList.remove("active");
        }
        lis[next].classList.add(`active`)
        point[next].classList.add("active");
        flag=true;
    }
    var t=setInterval(move,3000);
    box.onmouseover=function () {
        clearInterval(t);
    }
    box.onmouseout=function () {
        t=setInterval(move,3000)
    }
    point.forEach(function (value,index) {
        var s;
        value.onmouseover=function () {
            s=setTimeout(function () {
                for (var i = 0; i < point.length; i++) {
                    lis[i].classList.remove(`active`)
                    point[i].classList.remove("active");
                }
                lis[index].classList.add(`active`)
                point[index].classList.add("ative");
                next=index;
            },500);
        }
        value.onmouseout=function () {
            clearTimeout(s)
        }
    })
    right.onclick=function () {
        if (flag){
            flag=false;
           move(`l`)
        }
    }
    left.onclick=function () {
        if (flag){
            flag=false;
           move(`r`)
        }
    }
    //明星单品，推荐选项卡
    var moreleft=document.querySelector(`.more-left`),
        moreright=document.querySelector(`.more-right`),
        ul=document.querySelector(`.mainxm>ul`),
        mleft=document.querySelector(`.l1`),
        mright=document.querySelector(`.r1`),
        mul=document.querySelector(`.mainxmul`),
        flagl=false,
        flag2=true,
        flagl1=false,
        flag22=true;
    // console.log(mleft,mright,mul)
    function huadong() {
        moreleft.classList.add(`active`);
        moreright.classList.remove(`active`);
        animate(ul,{left:-1226},function () {
            var t=setTimeout(function () {
                moreleft.classList.remove(`active`);
                moreright.classList.add(`active`);
                animate(ul,{left:0})
            },3000)
        })
    }
    var t=setInterval(huadong,3000);
    ul.onmouseover=function () {
        clearInterval(t)
    }
    ul.onmouseout=function () {
        t=setInterval(huadong,3000)
    }
    moreleft.onclick=function (e) {
        e.preventDefault();
        if (flag1==true){
            flag1=false;
            flag2=true;
            moreleft.classList.remove(`active`);
            moreright.classList.add(`active`);
            animate(ul,{left:0})
        }
    }
    moreright.onclick=function (e) {
        e.preventDefault();
        if (flag2==true){
            flag2=false;
            flag1=true;
            moreleft.classList.add(`active`);
            moreright.classList.remove(`active`);
            animate(ul,{left:-1226})
        }
    }
    mleft.onclick=function () {
        if (flag11==true) {
            flag11 = false;
            flag22 = true;
            mleft.classList.remove(`active`);
            mright.classList.add(`active`);
            animate(mul, {left: 0})
        }
    }
    mright.onclick=function () {
        if (flag22==true){
            flag22=false;
            flag11=true;
            mleft.classList.add(`active`);
            mright.classList.remove(`active`);
            animate(mul,{left:-1226})
        }
    }
    //内容小轮播
    function xiaolunbo(a,b,c,d,e,f) {
        let box=document.querySelector(a),
            tu=document.querySelector(b),
            img=document.querySelectorAll(c),
            dian=document.querySelectorAll(d),
            left=document.querySelector(e),
            right=document.querySelector(f),
            w=parseInt(getComputedStyle(box,null).width);
        let now=0,next=0,flag=true;
        function move1(way=`l`) {
            if(way==`l`){
                next=now+1;
                if(next>=img.length){
                    next=0
                }
                img[next].style.left=w+`px`;
                animate(img[now],{left:-w});
                animate(img[next],{left:0},function () {
                    flag=true
                });
            }else if(way==`r`){
                next=now-1;
                if(next<0){
                    next=img.length-1
                }
                img[next].style.left=-w+`px`;
                animate(img[now],{left:w});
                animate(img[next],{left:0},function () {
                    flag=true
                });
            }
            for(var i=0;i<dian.length;i++){
                dian[i].classList.remove(`active`)
            }
            dian[next].classList.add(`active`)
            now=next;
        };
        left.onclick=function () {
            if(flag){
                flag=false;
                move1(`r`)
            }
        };
        right.onclick=function () {
            if(flag){
                flag=false;
                move1(`l`)
            }
        };
        dian.forEach(function (value,index) {
            value.onclick=function () {
                if(flag){
                    flag=false;
                    if(now<index){
                        img[index].style.left=w+`px`;
                        animate(img[now],{left:-w});
                        animate(img[index],{left:0},function () {
                            flag=true
                        });
                    }else if(now>index) {
                        img[index].style.left=-w+`px`;
                        animate(img[now],{left:w});
                        animate(img[index],{left:0},function () {
                            flag=true
                        });
                    }else {
                        flag=true
                    }
                    for(var i=0;i<dian.length;i++){
                        dian[i].classList.remove(`active`)
                    }
                    dian[index].classList.add(`active`)
                    now=index;
                }
            }
        });
    }
    xiaolunbo(`.r2`,`.books`,`.books>li`,`.point3>li`,`.point91`,`.point92`);
    xiaolunbo(`.r21`,`.title`,`.title>li`,`.point4>li`,`.p911`,`.p921`);
    xiaolunbo(`.r22`,`.game`,`.game>li`,`.p3>li`,`.p912`,`.p922`);
    xiaolunbo(`.r23`,`.apply`,`.apply>li`,`.p4>li`,`.p913`,`.p923`);
}

