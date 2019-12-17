var imgTab = document.querySelectorAll('.img-tabbar li')
var swiperul = document.querySelector('.imglist')
var box = document.querySelector('.lf-swiper')
var index = 0
var tab = 0

for (let i = 0; i < imgTab.length; i++) {
    imgTab[i].onmouseenter = function() {
        for (var j = 0; j < imgTab.length; j++) {
            imgTab[j].className = ''
            imgTab[i].className = 'select'
            animation(swiperul, -i * 820)
            index = tab = i
            console.log(index)
        }
    }
}

function animation(obj, target) {
    clearInterval(obj.timer)

    obj.timer = setInterval(function() {


        obj.style.left = target + 'px'
    }, 10)
}
var timer = null
timer = setInterval(autoplay, 2500)

function autoplay() {
    index++
    if (index > imgTab.length) {
        index = 1

    }
    animation(swiperul, -index * 820)
    tab++
    if (tab > imgTab.length - 1) {
        tab = 0
    }
    for (var i = 0; i < imgTab.length; i++) {
        imgTab[i].className = ''
    }
    imgTab[tab].className = 'select'
}
box.onmouseenter = function() {
    clearInterval(timer)
}
box.onmouseleave = function() {
    timer = setInterval(autoplay, 2500)
}