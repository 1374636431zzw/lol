window.onload = function() {
    var championItem = document.querySelector('.championItem')
    for (var i = 0; i < 52; i++) {
        var li = document.createElement('li')
        var img = document.createElement('img')
        img.src = './img/111.png'
        var p = this.document.createElement('p')
        p.innerHTML = '黑暗之女'
        li.appendChild(img)
        li.appendChild(p)
        championItem.appendChild(li)
    }

}