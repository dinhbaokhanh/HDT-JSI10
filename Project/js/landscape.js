document.getElementById("menu-shortcut").addEventListener("click", function () {
    window.location.href = './html/menu.html'
})

document.getElementById("food-shortcut").addEventListener("click", function () {
    window.location.href = './html/food.html'
})

document.getElementById("logo-image").addEventListener("click", function () {
    window.location.href = './landscape.html'
})

const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
    window.location.href = './html/logIn.html'
};

