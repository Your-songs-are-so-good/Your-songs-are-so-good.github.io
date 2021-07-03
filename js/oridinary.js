var header = document.querySelector(".header");
header.firstElementChild.firstElementChild.onclick = function () {
    window.open("/chenmi");
}
header.firstElementChild.lastElementChild.onclick = function () {
    window.open("https://www.chenmi.online/");
}

$.ajax({
    type: 'get',
    url: 'https://api.xygeng.cn/Bing/url',
    success: function (response) {
        // $('.bg-picture').html(response.data);
        $('.bg-picture').css('background-image', 'url(' + response.data + ')');
        // console.log(response);
    },
    error: function (xhr) {
        console.log(xhr);
    }
})


//使图片加载更快
window.addEventListener('DOMContentLoaded', changeHeight);
window.addEventListener('resize', changeHeight);

// window.onload = function () {
//     changeHeight();
// }
// window.onresize = function () {
//     changeHeight();
// }

function changeHeight() {
    var view = document.querySelector(".view");
    view.style.height = document.documentElement.clientHeight + 'px';
    view.childNodes[1].style.height = document.documentElement.clientHeight + 'px';
}

//导航栏动态实现
document.addEventListener('scroll', function () {
    // var mheaderHeight = Number(getComputedStyle(document.querySelector('.header')).getPropertyValue('--mheader').split("px")[0]);
    // console.log(1);
    if (window.pageYOffset >= document.documentElement.clientHeight / 2) {
        // document.querySelector('.header').style.setProperty("--mheader", "0px");
        animate(document.querySelector('.header'), 50);
    } else {
        // document.querySelector('.header').style.setProperty("--mheader", "10px");
        animate(document.querySelector('.header'), 70);
    }
});

function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        var mheader = Number(getComputedStyle(obj).getPropertyValue("--mheader").split("px")[0]);
        var step = obj.offsetHeight - target;
        step = step >= 0 ? -1 : 1;
        // step = step > 0 ? Math.ceil(step) : 10 + Math.floor(step);
        if (obj.offsetHeight == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        } else {
            obj.style.setProperty("--mheader", mheader + step + 'px');
            obj.style.backgroundColor = "rgba(0,0,0," + (14 - (mheader + step)) / 10 + ")";
        }
    }, 20);
}

