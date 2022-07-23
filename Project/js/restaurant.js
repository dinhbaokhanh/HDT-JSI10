document.getElementById("logo-image").addEventListener("click", function () {
    window.location.href = '../landscape.html'
})

document.getElementById("account").addEventListener("click", function () {
    window.location.href = '../html/logIn.html'
})

Topbutton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        Topbutton.style.display = "block";
    } else {
        Topbutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0; 
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

// filter

function change() {
    var groupsCbs = document.querySelectorAll(".groups input[type='checkbox']");
    var categoriesCbs = document.querySelectorAll(".categories input[type='checkbox']");
    var filters = {
        groups: getClassOfCheckedCheckboxes(groupsCbs),
        categories: getClassOfCheckedCheckboxes(categoriesCbs)
    };
  
    filterResults(filters);
}
  
function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("rel"));
        }
      }
    }
  
    return classes;
}
  
function filterResults(filters) {
    var rElems = document.querySelectorAll(".menu .food");
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
        return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];

        if (filters.categories.length > 0) {
            var isHidden = true;
  
                for (var j = 0; j < filters.categories.length; j++) {
                    var filter = filters.categories[j];
  
                    if (el.classList.contains(filter)) {
                        isHidden = false;
                        break;
                    }
                }
  
            if (isHidden) {
                hiddenElems.push(el);
            }
        }
    }
  
    for (var i = 0; i < rElems.length; i++) {
        rElems[i].style.display = "flex";
    }
  
    if (hiddenElems.length <= 0) {
        return;
    }
  
    for (var i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].style.display = "none";
    }
}

// search engine
function SearchEngine() {
    var input, filter, food, food_name, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    food = document.getElementsByClassName('food');
  
    for (i = 0; i < food.length; i++) {
        food_name = food[i].getElementsByClassName('food-name')[0];
        txtValue = food_name.textContent || food_name.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            food[i].style.display = "";
        } else {
            food[i].style.display = "none";
        }
    }
}

// cart

var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i]
    button.addEventListener("click", function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
    })
}

// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i]
        var price_item = cart_row.getElementsByClassName("cart-price")[0]
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(price_item.innerText)
        var quantity = quantity_item.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'

}
  

document.getElementsByClassName('order')[0].addEventListener('click', function(){
    if (document.getElementsByClassName('cart-item').length > 1) {
        purchaseClicked()
    }
    if (document.getElementsByClassName('cart-item').length < 1 || document.getElementsByClassName('cart-item').length == 1 ) {
        document.getElementById('modal-content').style.display = "none";
        document.getElementById('empty-cart').style.display = 'block';
    } else {
        document.getElementById('modal-content').style.display = "block";
        document.getElementById('empty-cart').style.display = 'none';
    }
})

function purchaseClicked() {
    alert('Thanks for your payment')
    var cart_item = document.getElementsByClassName('cart-items')[0]
    while (cart_item.hasChildNodes()) {
        cart_item.removeChild(cart_item.firstChild)     
    }
    updatecart()
}

var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
    var input = quantity_input[i];
    input.addEventListener("change", function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
        }
        updatecart()
    })
}

var add_cart = document.getElementsByClassName("btn-cart");
    
for (var i = 0; i < add_cart.length; i++) {
    var add = add_cart[i];
    

    add.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement.parentElement.parentElement;
        var img = product.getElementsByClassName('food-image').src;
        var title = product.getElementsByClassName('food-name').innerText;
        var price = product.getElementsByClassName('price').innerText;
            
        addItemToCart(title, price, img)
        updatecart()    
        
    })
}


function addItemToCart(big_title, title, price, img, quantity) {
    var cartRow = document.createElement('div') 

    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cart_title = cartItems.getElementsByClassName('cart-item-title')

    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {         
            quantity ++;
            alert('Please check your cart')
            return
        }
    }
    
    

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${img}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" onkeypress="return isNumberKey(event)" type="text" value="${quantity}">
            <div class="btn btn-danger" type="button">Remove</div>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)

    
    
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
        updatecart()
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
        input.value = quantity;
        }
        updatecart()
    })
}
