
var width_price=document.documentElement.clientWidth;

var slide_price=[];

var button_price=document.querySelector('.button__show_price')
slide_price=document.querySelectorAll('.slide_price');
var button_transform_price=document.querySelector('.button__img_price');
var button__p_price=document.querySelector('.button__p_price');
button__p_price.textContent='Показать';

if (width_price<=767) {
  const swiper_price = new Swiper('.swiper-container_price', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination_price',
    },
    // Navigation arrows

  });
}else {
    if (width_price <= 1119) {
        if (slide_price.length > 6) {
            for (var i = 6; i < slide_price.length; i++) {
                slide_price[i].style.display = "none";
            }
        }
    } else{
        for ( i = 8; i < slide_price.length; i++) {
            slide_price[i].style.display = 'none';

        }

    }
}
var none_block_price=1;
 button_price.addEventListener("click", function () {
     if (width_price <= 1119) {
         if (none_block_price === 1) {
             for (var i = 6; i < slide_price.length; i++) {
                 slide_price[i].style.display = 'flex';

             }
             button_transform_price.classList.add('button_transform_price');
             button__p_price.textContent='Скрыть';
             none_block_price = none_block_price - 1;
         } else {
             for (var i = 6; i < slide_price.length; i++) {
                 slide_price[i].style.display = 'none';
             }
             button_transform_price.classList.remove('button_transform_price');
             button__p_price.textContent='Показать';
             none_block_price = none_block_price + 1;
         }
     } else{
         if (none_block_price === 1) {
             for (var i = 8; i < slide_price.length; i++) {
                 slide_price[i].style.display = 'flex';

             }
             button_transform_price.classList.add('button_transform_price');
             button__p_price.textContent='Скрыть';
             none_block_price = none_block_price - 1;
         } else {
             for (var i = 8; i < slide_price.length; i++) {
                 slide_price[i].style.display = 'none';
             }
             button_transform_price.classList.remove('button_transform_price');
             button__p_price.textContent='Показать';
             none_block_price = none_block_price + 1;
         }

     }
 })

 window.addEventListener('resize', function () {
    "use strict";
     window.location.reload();
 });

