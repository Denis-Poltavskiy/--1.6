var height_form=document.documentElement.scrollHeight;
var html=document.querySelector('html');
//var width_form=document.documentElement.scrollWidth;
// alert(width_form);
var form=document.querySelector('.form-page');
var button_chat=document.querySelectorAll('.menu__button_chat');
var button_call=document.querySelectorAll('.menu_call'); //попробоватьсделать для всех кнопок звонка
var form_title=document.querySelector('.form-page__title_h1');
var form_text=document.querySelector('.form-page_text');
var form_email=document.querySelector('.form-page_email');
var form_textarea=document.querySelector('.form-page__textarea');
var form_button_close=document.querySelector('.form-page__button-close');

let main=document.querySelector('.main');
let vacuum = document.createElement('div');

// var menu__head_search= document.querySelector(".mobile-menu__head_search");

// var none_block_form=1;
form.style.height=height_form+'px';

button_chat.forEach(function(btn_chat) {
  // Вешаем событие клик
  btn_chat.addEventListener('click', function (e) {
    main.appendChild(vacuum);
    vacuum.classList.add("vacuum");

    vacuum.style.height=height_form+'px';
    // vacuum.style.width=width_form+'px';

    vacuum.style.zIndex='100';
    form.style.display = 'block';
    form_text.style.display='block';
    form_email.style.display='block';
    form_textarea.style.display='block';
    form_title.textContent="Обратная связь";

    html.style.overflow="hidden";

  });

});
// Проходим по массиву
button_call.forEach(function(btn) {
  // Вешаем событие клик
  btn.addEventListener('click', function(e) {
    form.style.display = 'block';
    main.appendChild(vacuum);
    vacuum.classList.add("vacuum");
    vacuum.style.height=height_form+'px';
    // vacuum.style.width=width_form+'px';
    vacuum.style.zIndex='100';

    form_title.textContent="Заказать звонок";
    form_text.style.display='none';
    form_email.style.display='none';
    form_textarea.style.display='none';
    html.style.overflow="hidden";
  })
});

form_button_close.addEventListener("click", function () {
  form.style.display = 'none';
  vacuum.classList.remove("vacuum");
  main.removeChild(vacuum);
  html.style.overflow="auto";

});
vacuum.addEventListener("click", function () {
  form.style.display="none";
  vacuum.classList.remove("vacuum");
  main.removeChild(vacuum);
  html.style.overflow="auto";
});
