$(document).ready(function () {
    //侧导航选项卡
    function select(x,y) {
        var a=$(x);
        var b=$(y);
        // console.log(a,b);
        a.each(function (index,value) {
            $(value).on("mouseover",function () {
                for(var i=0;i<a.length;i++){
                    $(a[i]).removeClass("active");
                    $(b[i]).removeClass("active");
                }
                $(this).addClass("active");
                $(b[index]).addClass("active");
            })
            $(value).on("mouseout",function () {
                for(var i=0;i<a.length;i++){
                    $(a[i]).removeClass("active");
                    $(b[i]).removeClass("active");
                }
            })
        })
    }
    select(`.cedaohang li.cdhli`,`.cedaohang>li>div`);
    //配件，周边，搭配选项卡
    function select1(x,y) {
        var a=$(x);
        var b=$(y);
        // console.log(a,b);
        a.each(function (index,value) {
            $(value).on("mouseover",function () {
                for(var i=0;i<a.length;i++){
                    $(a[i]).removeClass("active");
                    $(b[i]).removeClass("active");
                    $(a[i]).removeClass("active2");
                }
                $(this).addClass("active");
                $(b[index]).addClass("active");
                $(a[i]).addClass("active1");


            })
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
        var a=$(x);
        var b=$(y);
        var c=$(z);
        // console.log(a,b,c);
        a.each(function (index,value) {
            $(value).on("mouseover",function () {
                for(var i=0;i<a.length;i++){
                    // a[i].classList.remove("active");
                    $(b[i]).removeClass("active");
                }
                // this.classList.add("active");
                $(b[index]).addClass("active");
                // c.classList.add(`active`)
            })
        })
        $(`.daohang`).on("mouseover",function () {
            $(c).addClass(`active`)
        })
        $(`.daohang`).on("mouseout",function () {
            $(c).removeClass(`active`)
        })
    }
    select2(`.daohang>li`,`.navmenu`,`.navmenu1`)
    //头部大轮播
    var box=$(`.tu`);
    var lis=$(`.tu>img`),
        left=$(`.lunbozuo`),
        right=$(`.lunboyou`);
    var point=$(`.lbd`);
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
            $(lis[i]).removeClass(`active`)
            $(point[i]).removeClass("active");
        }
        $(lis[next]).addClass(`active`)
        $(point[next]).addClass("active");
        flag=true;
    }
    var t=setInterval(move,3000);
    $(box).on("mouseover",function () {
        clearInterval(t);
    })
    $(box).on("mouseout",function () {
        t=setInterval(move,3000)
    })
    point.each(function (index,value) {
        var s;
        $(value).on("mouseover",function () {
            s=setTimeout(function () {
                for (var i = 0; i < point.length; i++) {
                    $(lis[i]).removeClass(`active`)
                    $(point[i]).removeClass("active");
                }
                $(lis[index]).addClass(`active`)
                $(point[index]).addClass("ative");
                next=index;
            },500);
        })
        $(value).on("mouseout",function () {
            clearTimeout(s)
        })
    })
    $(right).on("click",function () {
        if (flag){
            flag=false;
            move(`l`)
        }
    })
    $(left).on("click",function () {
        if (flag){
            flag=false;
            move(`r`)
        }
    })
    //明星单品，推荐选项卡
    var moreleft=$(`.more-left`),
        moreright=$(`.more-right`),
        ul=$(`.mainxm>ul`),
        mleft=$(`.l1`),
        mright=$(`.r1`),
        mul=$(`.mainxmul`),
        flagl=false,
        flag2=true,
        flag1=false,
        flag22=true;
    // console.log(mleft,mright,mul)
    function huadong() {
        $(moreleft).addClass(`active`);
        $(moreright).removeClass(`active`);
        animate(ul,{left:-1226},function () {
            var t=setTimeout(function () {
                $(moreleft).removeClass(`active`);
                $(moreright).addClass(`active`);
                $(ul).animate({left:0},"slow")
            },3000)
        })
    }
    var t=setInterval(huadong,3000);
    $(ul).on("mouseover",function () {
        clearInterval(t)
    })
    $(ul).on("mouseout",function () {
        t=setInterval(huadong,3000)
    })
    $(moreleft).on("click",function (e) {
        e.preventDefault();
        if (flag1==true){
            flag1=false;
            flag2=true;
            $(moreleft).removeClass(`active`);
            $(moreright).addClass(`active`);
            $(ul).animate({left:0},"slow")
        }
    })
    $(moreright).on("click",function (e) {
        e.preventDefault();
        if (flag2==true){
            flag2=false;
            flag1=true;
            $(moreleft).addClass(`active`);
            $(moreright).removeClass(`active`);
            $(ul).animate({left:-1226},"slow")
        }
    })
    $(mleft).on("click",function () {
        if (flag1==true) {
            flag1 = false;
            flag22 = true;
            $(mleft).removeClass(`active`);
            $(mright).addClass(`active`);
            $(mul). animate({left: 0},"slow")
        }
    })
    $(mright).on("click",function () {
        if (flag22==true){
            flag22=false;
            flag1=true;
            $(mleft).addClass(`active`);
            $(mright).removeClass(`active`);
            $(mul).animate({left:-1226},"slow")
        }
    })
    //内容小轮播
    function xiaolunbo(a,b,c,d,e,f) {
        let box=$(a),
            tu=$(b),
            img=$(c),
            dian=$(d),
            left=$(e),
            right=$(f)
        let now=0,next=0,flag=true;
        function move1(way=`l`) {
            if(way==`l`){
                next=now+1;
                if(next>=img.length){
                    next=0
                }
                $(img[next]).css("left",269)
                $(img[now]).animate({"left":-269},"slow");
                $(img[next]).animate({"left":0},"slow",function () {
                    flag=true
                });
            }else if(way==`r`){
                next=now-1;
                if(next<0){
                    next=img.length-1
                }
                $(img[next]).css("left",-269)
                $(img[now]).animate({"left":269},"slow");
                $(img[next]).animate({"left":0},"slow",function () {
                    flag=true
                });
            }
            for(var i=0;i<dian.length;i++){
                $(dian[i]).removeClass(`active`)
            }
            $(dian[next]).addClass(`active`)
            now=next;
        };
        $(left).on("click",function () {
            if(flag){
                flag=false;
                move1(`r`)
            }
        });
        $(right).on("click",function () {
            if(flag){
                flag=false;
                move1(`l`)
            }
        });
        $(dian).each(function (index,value) {
            $(value).on("click",function () {
                if(flag){
                    flag=false;
                    if(now<index){
                        $(img[index]).css("left",269);
                        $(img[now]).animate({"left":269},"slow");
                        $(img[index]).animate({"left":0},"slow",function () {
                            flag=true
                        });
                    }else if(now>index) {
                        $(img[index]).css("left",-269);
                        $(img[now]).animate({"left":269},"slow");
                        $(img[index]).animate({"left":0},"slow",function () {
                            flag=true
                        });
                    }else {
                        flag=true
                    }
                    for(var i=0;i<dian.length;i++){
                        $(dian[i]).removeClass(`active`)
                    }
                    $(dian[index]).addClass(`active`)
                    now=index;
                }
            })
        });
    }
    xiaolunbo(`.r2`,`.books`,`.books>li`,`.point3>li`,`.p910`,`.p99`);
    xiaolunbo(`.r21`,`.title`,`.title>li`,`.point4>li`,`.p911`,`.p921`);
    xiaolunbo(`.r22`,`.game`,`.game>li`,`.p3>li`,`.p912`,`.p922`);
    xiaolunbo(`.r23`,`.apply`,`.apply>li`,`.p4>li`,`.p913`,`.p923`);
})
