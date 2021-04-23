var element = document.getElementById('form-sign');
var create= document.getElementById('create');
var form_1 = document.getElementById('form-1');
var form_2 = document.getElementById('form-2');
var log_in = document.getElementById('sign-in');
var sign = document.getElementById('log-in');
var form_element = document.getElementById('form-element');
var close_form = document.querySelector('.form-close');

log_in.onclick = function() {
    form_element.classList.toggle('active');
}
close_form.onclick = function() {
    form_element.classList.remove('active');
}
element.onclick = function() {
    form_1.style.display = 'block';
    form_2.style.display = 'none';
    element.classList.remove('active');
    create.classList.remove('active');

}
create.onclick = function() {
    form_2.style.display = 'block';
    form_1.style.display = 'none';
    element.classList.add('active');
    create.classList.add('active');

}


