
var height_mobile_menu=document.documentElement.scrollHeight;
let main=document.querySelector('.main');
var mobile_menu__left=document.querySelector('.mobile-menu__left');
var burger=document.querySelector('.header__main-menu_button');
let vacuum = document.createElement('div');
var menu_close=document.querySelector('.mobile-menu__head_close');
mobile_menu__left.style.height=height_mobile_menu+'px';

burger.addEventListener("click", function () {
   mobile_menu__left.style.display="flex";

  vacuum.classList.add("vacuum")
  main.appendChild(vacuum);
  vacuum.style.height=height_mobile_menu+'px';
});

vacuum.addEventListener("click", function () {
  mobile_menu__left.style.display="none";
  vacuum.classList.remove("vacuum");
  main.removeChild(vacuum);
});
menu_close.addEventListener("click", function () {
  mobile_menu__left.style.display = 'none';
  vacuum.classList.remove("vacuum");
  main.removeChild(vacuum);

});


