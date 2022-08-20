document.getElementById("logo-image").addEventListener("click", function () {
    window.location.href = '../landscape.html'
})

document.getElementById("login-redirect").addEventListener("click", function () {
    window.location.href = '../html/logIn.html'
})

const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
    window.location.href = '../html/logIn.html'
};

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
