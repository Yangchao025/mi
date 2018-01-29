/**
 * Created by lenovo on 2018/1/28.
 */

// 轮播图
let n=0;
let lis=document.querySelectorAll(".zuobanner li");
function go() {
    n++;
    if(n>=lis.length){
        n=0;
    }
    lis.forEach(function (val) {
        val.classList.remove("active");
    });
    lis[n].classList.add("active");
}

let t=setInterval(go,2000);
let banner=document.querySelector(".banner");
let to=setInterval(move,2000);

banner.onmouseover=function () {
    clearInterval(t),clearInterval(to);
};
banner.onmouseout=function () {
    t=setInterval(go,2000);
    to=setInterval(move,2000);
};
document.querySelector(".right").onclick=function () {
    go(),move();
};
document.querySelector(".left").onclick=function () {
    n--;
    if(n<0){
        n=lis.length-1;
    }
    lis.forEach(function (val) {
        val.classList.remove("active");
    });
    lis[n].classList.add("active");

    b--;
    if(b<0){
        b=lis.length-1;
    }
    liss.forEach(function (v) {
        v.classList.remove("active");
    });
    liss[b].classList.add("active");
};
// 轮播点
let b=0;
let liss=document.querySelectorAll(".dian li");
function move() {
    b++;
    if(b>=lis.length){
        b=0;
    }
    liss.forEach(function (v) {
        v.classList.remove("active");
    });
    liss[b].classList.add("active");
}
liss.forEach(function (value,index) {
    value.onclick=function () {
        liss.forEach(function (dom,i) {
            lis[i].classList.remove("active");
            liss[i].classList.remove("active");
        });
        this.classList.add("active");
        lis[index].classList.add("active");
        n=index;
    }
});
// 明星单品
let xiaodeleft=document.querySelector(".xiaodeleft");
let xiaoderight=document.querySelector(".xiaoderight");
let bigbox=document.querySelector(".bigbox");
let m=0;
function before() {
    n++;
    if(n%2==0){
        bigbox.style.transform="translateX(-1226px)"
    }else{
        bigbox.style.transform="translateX(0)"
    }
}
let too=setInterval(before,2000);
let xiamian=document.querySelector(".xiamian");
xiamian.onmouseover=function () {
    clearInterval(too);
};
xiamian.onmouseout=function () {
    too=setInterval(before,2000);
};

xiaoderight.onclick=function () {
    bigbox.style.transform="translateX(-1226px)"
};
xiaodeleft.onclick=function () {
    bigbox.style.transform="translateX(0)"
};


