document.getElementById("logo-image").addEventListener("click", function () {
    window.location.href = '../landscape.html'
})

document.getElementById("user").addEventListener("click", function () {
    window.location.href = '../html/logIn.html'
})

document.getElementById("res1").addEventListener("click", function () {
    window.location.href = '../html/restaurant1.html'
})

document.getElementById("res2").addEventListener("click", function () {
    window.location.href = '../html/restaurant2.html'
})

document.getElementById("res3").addEventListener("click", function () {
    window.location.href = '../html/restaurant3.html'
})

function SearchEngine() {
    var input, filter, card, card_name, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    card = document.getElementsByClassName('card');
  
    for (i = 0; i < card.length; i++) {
        card_name = card[i].getElementsByClassName('card-name')[0];
        console.log(card_name)
        txtValue = card_name.textContent || card_name.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
}

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

const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
};