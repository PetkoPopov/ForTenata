var body = document.getElementsByTagName('body')[0];
var canvas = document.getElementById("myCanvas");
var circles=[]
function createCircle(size_w, x, y) {
    var elDiv = document.createElement('div')
    elDiv.style.width = String(size_w) + 'px';
    elDiv.style.height = String(size_w) + 'px';
    elDiv.style.bottom = String(x) + 'px';
    elDiv.style.left = String(y) + 'px';
    elDiv.style.display = 'block'
    body.appendChild(elDiv);
    circles.push(elDiv);
}
createCircle(25, 100, 100);
createCircle(65, 100, 300);
canvas.addEventListener('click', () => {
    console.log(event.clientX, event.clientY)

})
var curDir = {'startX':()=>{
    
},
'startY':0,
'finalX':500,
'finalY':500}


