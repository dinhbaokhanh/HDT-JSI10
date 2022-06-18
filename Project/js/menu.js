// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var extra_close = document.getElementsByClassName("close")[1];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
    if (document.getElementsByClassName('cart-item').length < 1 || document.getElementsByClassName('cart-item').length == 1 ) {
        document.getElementById('modal-content').style.display = "none";
        document.getElementById('empty-cart').style.display = 'block';
    } else {
        document.getElementById('modal-content').style.display = "block";
        document.getElementById('empty-cart').style.display = 'none';
    }
}

extra_close.onclick = function () {
    modal.style.display = "none";
}
close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}