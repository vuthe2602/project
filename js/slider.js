var slider = document.querySelector('.slider'); // class cha img
var buttons = document.querySelectorAll('.btn');
var picture = document.querySelectorAll('.picture');
var options = document.querySelectorAll('.option'); // ul li

var index = 1;
var op_index = 0;
var size = picture[index].clientWidth;

update();

function update() {
    slider.style.transform = "translateX(" +(-size*index) +"px)";
    options.forEach(op => op.classList.remove('color'));
    options[op_index].classList.add('color');
}

function slide() {
    slider.style.transition = "transform .5s ease-in-out";
    update();
}


slider.addEventListener('transitionend',() =>{
    if(picture[index].id === 'first') {
        slider.style.transition = 'none';
        index = picture.length-2;
        slider.style.transform = "translateX(" +(-size*index) +"px)";
    }
    else if(picture[index].id === 'last') {
        slider.style.transition = 'none';
        index = 1;
        slider.style.transform = "translateX(" +(-size*index) +"px)";
    }
});

buttons.forEach(btn => btn.addEventListener('click',function btnCheck(){
    if(this.id === "prev") {
        index--;
        if(op_index === 0) {
            op_index = 3;
        } else {
            op_index--;
        }
    }
    else if(this.id === "next") {
        index++;
        if(op_index === 3) {
            op_index = 0;
        } else {
            op_index++;
        }
    }
    slide();
}));

options.forEach(option => option.addEventListener('click', function optionFnc(){
    let i = Number(this.getAttribute('option-index'));
    index = i +1;
    op_index = i;
    slide();
} ));



window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    // var nav = document.querySelector("navigation")
    header.classList.toggle("sticky" ,window.scrollY > 0);
    // nav.style.display = "block";
});


