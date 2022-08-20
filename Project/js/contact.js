const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    alert("You've submitted the form")
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}