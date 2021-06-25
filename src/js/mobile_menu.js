
var height_mobile_menu=document.documentElement.scrollHeight;
let main=document.querySelector('.main');
var mobile_menu__left=document.querySelector('.mobile-menu__left');
var burger=document.querySelector('.header__main-menu_button');
let vacuum = document.createElement('div');
mobile_menu__left.style.height=height_mobile_menu+'px';
burger.addEventListener("click", function () {
   mobile_menu__left.style.display="flex";

  vacuum.classList.add("vacuum")
  main.appendChild(vacuum);
  vacuum.style.height=height_mobile_menu+'px';
});

vacuum.addEventListener("click", function () {
  mobile_menu__left.style.display="none";
  vacuum.classList.remove("vacuum")
});

// var height_form=document.documentElement.scrollHeight;
// var form=document.querySelector('.form-page');
// var button_chat=document.querySelector('.menu__button_chat');
// var button_call=document.querySelector('.menu__button_call');
// var form_title=document.querySelector('.form-page__title_h1');
// var form_text=document.querySelector('.form-page_text');
// var form_email=document.querySelector('.form-page_email');
// var form_textarea=document.querySelector('.form-page__textarea');
// var form_button_close=document.querySelector('.form-page__button-close');
//
//
// var none_block_form=1;
// form.style.height=height_form+'px';
//
// button_chat.addEventListener("click", function () {
//
//   form_text.style.display='block';
//   form_email.style.display='block';
//   form_textarea.style.display='block';
//   form_title.textContent="Обратная связь";
//   if (none_block_form===1){
//     form.style.display = 'block';
//     none_block_form=none_block_form+1;}
//   else {
//       form.style.display = 'none';
//       none_block_form=none_block_form-1;
//     }
// });
// button_call.addEventListener("click", function () {
//   form_title.textContent="Заказать звонок";
//   form_text.style.display='none';
//   form_email.style.display='none';
//   form_textarea.style.display='none';
//
//   if (none_block_form===1){
//     form.style.display = 'block';
//     none_block_form=none_block_form+1;}
//   else {
//     form.style.display = 'none';
//     none_block_form=none_block_form-1;
//   }
// });
//
// form_button_close.addEventListener("click", function () {
//   form.style.display = 'none';
//
// });
