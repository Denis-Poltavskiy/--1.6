var height_form=document.documentElement.scrollHeight;
// var width_form=document.documentElement.scrollWidth;
// alert(width_form);
var form=document.querySelector('.form-page');
var button_chat=document.querySelector('.menu__button_chat');
var button_call=document.querySelector('.menu_call'); //попробоватьсделать для всех кнопок звонка
var form_title=document.querySelector('.form-page__title_h1');
var form_text=document.querySelector('.form-page_text');
var form_email=document.querySelector('.form-page_email');
var form_textarea=document.querySelector('.form-page__textarea');
var form_button_close=document.querySelector('.form-page__button-close');

let main=document.querySelector('.main');
let vacuum = document.createElement('div');



// var none_block_form=1;
form.style.height=height_form+'px';

button_chat.addEventListener("click", function () {

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
  // if (none_block_form===1){
  //     form.style.display = 'block';
  //     none_block_form=none_block_form+1;
  // }
  // else {
  //     form.style.display = 'none';
  //     none_block_form=none_block_form-1;
  //   }
});
button_call.addEventListener("click", function () {
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

  // if (none_block_form===1){
  //
  //   form.style.display = 'block';
  //   none_block_form=none_block_form+1;}
  // else {
  //   form.style.display = 'none';
  //   none_block_form=none_block_form-1;
  // }
});

form_button_close.addEventListener("click", function () {
  form.style.display = 'none';
  vacuum.classList.remove("vacuum");

});
vacuum.addEventListener("click", function () {
  form.style.display="none";
  vacuum.classList.remove("vacuum")
});