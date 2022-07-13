document.getElementById("logo-image").addEventListener("click", function () {
    window.location.href = '../landscape.html'
})

document.getElementById("user").addEventListener("click", function () {
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
    var rElems = document.querySelectorAll(".goods .items");
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
        return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];
  
        if (filters.groups.length > 0) {
            var isHidden = true;
  
            for (var j = 0; j < filters.groups.length; j++) {
                var filter = filters.groups[j];
  
                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }
  
            if (isHidden) {
                hiddenElems.push(el);
            }
        }
  
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
        rElems[i].style.display = "block";
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
