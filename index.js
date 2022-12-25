var body = document.getElementsByTagName('body')[0];
var canvas = document.getElementById("myCanvas")
var x = 130, y = 120, d, speed = 50;
var size = 12
var path = []
var anime;
createCircle(size, size, x, y)
var r_number_1, r_number_2
r_number_1 = Math.ceil((Math.random() * 11) * (Math.random() * 13)) * 7
r_number_2 = Math.ceil((Math.random() * 11) * (Math.random() * 13)) * 5
createCircle(size + 20, size + 20, r_number_1, r_number_2, "red", "circle_red")
canvas.addEventListener('click', (event) => {
    clearInterval(anime)
    var ampl = 0
    var a_click = event.clientX;
    var b_click = event.clientY;
    if (a_click == x && b_click == y) { }
    else {
        var k = (b_click - y) / (a_click - x)
        ampl = b_click - k * a_click
        let i = x
        let n = m = 1
        if (a_click - x < 0) { n = -1 }
        if (b_click - y < 0) { m = -1 }
        console.log('n--> ', n, ' /  m--> ', m, ' k--> ', k)
        // return 0

        while (true) {
            y = k * i + ampl;
            console.log(y, b_click)
            if ((n == -1 && m == -1) && (y < b_click)) { break; }
            else if ((n == 1 && m == -1) && (y < b_click)) { break }
            else if ((n == -1 && m == 1) && (y > b_click)) { break }
            else if ((n == 1 && m == 1) && (y > b_click)) { break }

            i += n;
            path.push({ i, y });
        }
    }
    x = a_click
    y = b_click
    i = x
    path.push({ i, y })
    setTimeout(() => { showPath() }, 200)
})
function showPath() {
    anime = setInterval(() => {
        let d = document.getElementsByClassName('circle')
        console.log(d[d.length - 1])

        let r = path.shift()
        if (path.length == 0) {
            clearInterval(anime)
        } else {
            canvas.removeChild(d[d.length - 1])
            createCircle(size, size, r.i, r.y)
        }
    }, speed)

}

function createCircle(n, m, left, bottom, color = 'cadetblue', class_ = "circle") {
    d = document.createElement('div')
    d.setAttribute('class', class_)
    d.style.backgroundColor = color
    d.style.left = String(left) + 'px'
    d.style.top = String(bottom) + 'px'
    d.style.width = String(n) + 'px'
    d.style.height = String(m) + 'px'

    canvas.appendChild(d)
}


