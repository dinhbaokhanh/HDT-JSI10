var once = false;
var cautions;
cautions = document.getElementsByClassName('caution')
function caution(){
    if(once == false) {
        cautions.style.display = 'block';
        once = true;
    }
};