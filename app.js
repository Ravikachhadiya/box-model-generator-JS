let button = document.getElementById('theBoxes');
button.addEventListener("click", myFuction);

var oldValue = 0;
var i = 1;
function myFuction() {
    let n = parseInt(document.getElementById('number').value);
    let c = document.getElementById('color').value;

    n += parseInt(i);
    for (i; i < n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = (i);
        box.style.backgroundColor = c;

        oldValue = document.getElementById('box').lastElementChild.innerHTML;
    }
}