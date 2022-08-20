var modal = document.getElementById("cart")
function openCart() {
    modal.style.width = "700px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeCart() {
    modal.style.width = "0px";
    document.body.style.backgroundColor = "white";
}