window.onload=function () {
    let banner=document.querySelector(`.banner-zhong`)
    let img=document.querySelectorAll(`.banner_img li`)
    let right=document.querySelector(`.banner-box-right`)
    let left=document.querySelector(`.banner-box-left`)
    let dian=document.querySelectorAll(`.banner-bottom li`)
    let width=parseInt(getComputedStyle(img[0],null).width);
    let t
    now=next=0
    t=setInterval(fu,2000)
    right.onclick=fu
    left.onclick=fn1
    banner.onmousemove=function () {
        clearInterval(t)
    }
    banner.onmouseout=function () {
        t=setInterval(fu,2000)
    }
    function fu() {
        next++
        if(next==img.length){
            next=0
        }
        img[now].style.left=0
        img[next].style.left=`${width}px`
        animate(img[now],{left:-width},function () {
            for (let i=0;i<dian.length;i++){
                dian[i].style.backgroundColor=` #b8b0b3`
                dian[next].style.backgroundColor=`#cb0269`
            }
        })
        animate(img[next],{left:0})
        now=next
    }
    function fn1() {
        next--
        if(next==-1){
            next=img.length-1
        }
        img[now].style.left=0
        img[next].style.left=`${-width}px`
        animate(img[now],{left:width},function () {
            for (let i=0;i<dian.length;i++){
                dian[i].style.backgroundColor=` #b8b0b3`
                dian[next].style.backgroundColor=`#cb0269`
            }
        })
        animate(img[next],{left:0})
        now=next
    }
    for (let j=0;j<dian.length;j++){
        dian[j].onclick=function () {
            if (dian.length>img.length){

            }
            dian[next].style.backgroundColor=`#b8b0b3`
            dian[j].style.backgroundColor=`#cb0269`
            img[next].style.left=`${width}px`
            img[j].style.left=0
            next=j
        }
    }

    let down=document.querySelectorAll(`.banner-left2`)
    let star=document.querySelectorAll(`.dropdown-menu`)
    for(let i=0;i<star.length;i++){
        down[i].onmousemove=function () {
            star[i].style.display=`block`
        }

        down[i].onmouseout=function () {
            star[i].style.display=`none`
        }
    }


    function news(){
        let box=document.getElementsByClassName('news')[0];
        let content=document.getElementsByClassName('news-text')[0];
        let huan=content.getElementsByClassName('news-text1');
        let content1=document.getElementsByClassName('news-text')[1];
        let huan1=content1.getElementsByClassName('news-text1');
        let back=document.getElementsByClassName('news-right-right')[0];
        let forward=document.getElementsByClassName('news-right-left')[0];
        let num=0;
        let t=setInterval(fn,4000);
        function fn(){
            num++;
            if(num==huan.length){
                num=0;
            }
            for(let i=0;i<huan.length;i++){
                huan[i].className="news-text1 news-text2";
                huan1[i].className="news-text1 news-text2";
            }
            huan[num].className="news-text1";
            huan1[num].className="news-text1";
        }
        back.onclick=function(){
            num++;
            if(num==huan.length){
                num=0;
            }
            for(let i=0;i<huan.length;i++){
                huan[i].className="news-text1 news-text2";
                huan1[i].className="news-text1 news-text2";
            }
            huan[num].className="news-text1";
            huan1[num].className="news-text1";
        }
        forward.onclick=function(){
            num--;
            if(num==-1){
                num=huan.length-1;
            }
            for(let i=0;i<huan.length;i++){
                huan[i].className="news-text1 news-text2";
                huan1[i].className="news-text1 news-text2";
            }
            huan[num].className="news-text1";
            huan1[num].className="news-text1";
        }
        box.onmouseover=function(){
            clearInterval(t);
        }
        box.onmouseout=function(){
            t=setInterval(fn,4000);
        }
    }
    news();

}


function jiedian(){
    let max=document.querySelector('.lunbo')
    let box=document.querySelector('.lunboneirong')
    let imgs=document.querySelectorAll('.lunboneirong a')
    let last=box.lastElementChild;
    let left=box.nextElementSibling;
    let right=left.nextElementSibling;
    let width=parseInt(getComputedStyle(imgs[0],null).width)
    let flag=true;
    function move(){
        animate(box,{left:-width+10},1000,function(){
            let first=box.firstElementChild;
            box.style.left='15px';
            box.appendChild(first)
            flag=true;

        })
    }


    function move1(){
        let first=box.firstElementChild;
        let last=box.lastElementChild
        box.style.left=-(width-8)+'px'
        box.insertBefore(last,first)
        animate(box,{left:15},1000,function(){
//				box.style.left=-width+3+'px'
            flag=true;
        })

    }
    let t=setInterval(move,4000)
    right.onclick=function(){
        if(flag){
            flag=false;
            move()
        }

    }
    left.onclick=function(){
        if(flag){
            flag=false;
            move1()
        }
    }
    max.onmouseenter=function(){
        clearInterval(t)
    }
    max.onmouseleave=function(){
        clearInterval(t)
        t=setInterval(move,4000)
    }

}
jiedian()