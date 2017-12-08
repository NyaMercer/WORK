window.onload=function () {
    var box = document.querySelector(`.banner-main`);
    var lis = document.querySelectorAll(`.foucs-link`),
        left = document.querySelector(`.left-arrow`),
        right = document.querySelector(`.right-arrow`);
    var width = parseInt(getComputedStyle(lis[0], null).width);
    var next = 0;
    var flag = true;
    function move() {
            next++
            if (next ==lis.length) {
                next = 0;
            }
            if (next ==-1) {
                next = lis.length - 1;
            }
            for (var i = 0; i < lis.length; i++) {
            animate(lis[i],{opacity:0},function () {
                flag=true;
            })
            }
            animate(lis[next],{opacity:1},function () {
            flag=true;
            })
    }

    var t = setInterval(move, 3000);
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000)
    };
    right.onclick=function () {
        if (flag) {
            flag=false;
            move();
        }
    }
    left.onclick=function () {
        if (flag) {
            flag=false;
            next-=2;
            move();
        }
    }
}

