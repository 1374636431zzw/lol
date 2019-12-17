var sub = document.getElementsByClassName('nav-sub')[0]
var mainNav = document.getElementsByClassName('mainNav')[0]
var phonehover = document.getElementsByClassName('phone-hover')[0]
var phone = document.getElementsByClassName('phone')[0]
var timer = null
mainNav.onmouseenter = function() {
    sub.classList.add('show')

    this.onmouseleave = function() {
        sub.classList.remove('show')
    }
}
phone.onmouseenter = phonehover.onmouseenter = function() {
    if (timer) clearInterval(timer)
    phonehover.classList.add('show')

}
phonehover.onmouseleave = phone.onmouseleave = function() {
    timer = setTimeout(function() {
        phonehover.classList.remove('show')
    }, 100)

}