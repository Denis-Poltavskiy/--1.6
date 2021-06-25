
var width_height=document.documentElement.clientWidth;
console.log(width_height)
var slide_height=[];

var button_height=document.querySelector('.button__show_height')
slide_height=document.querySelectorAll('.slide_height');
var button_transform_height=document.querySelector('.button__img_height');
var button__p_height=document.querySelector('.button__p_height');
button__p_height.textContent='Показать';

if (width_height<=767) {
  const swiper_height = new Swiper('.swiper-container_height', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination_height',
    },
    // Navigation arrows

  });
}else {
    if (width_height <= 1119) {
        if (slide_height.length > 3) {
            for (var i = 3; i < slide_height.length; i++) {
                slide_height[i].style.display = "none";
            }
        }
    } else{
        for ( i = 4; i < slide_height.length; i++) {
            slide_height[i].style.display = 'none';

        }

    }
}
var none_block_height=1;
 button_height.addEventListener("click", function () {
     if (width_height <= 1119) {
         if (none_block_height === 1) {
             for (var i = 3; i < slide_height.length; i++) {
                 slide_height[i].style.display = 'flex';

             }
             button_transform_height.classList.add('button_transform_height');
             button__p_height.textContent='Скрыть';
             none_block_height = none_block_height - 1;
         } else {
             for (var i = 3; i < slide_height.length; i++) {
                 slide_height[i].style.display = 'none';
             }
             button_transform_height.classList.remove('button_transform_height');
             button__p_height.textContent='Показать';
             none_block_height = none_block_height + 1;
         }
     } else{
         if (none_block_height === 1) {
             for (var i = 4; i < slide_height.length; i++) {
                 slide_height[i].style.display = 'flex';

             }
             button_transform_height.classList.add('button_transform_height');
             button__p_height.textContent='Скрыть';
             none_block_height = none_block_height - 1;
         } else {
             for (var i = 4; i < slide_height.length; i++) {
                 slide_height[i].style.display = 'none';
             }
             button_transform_height.classList.remove('button_transform_height');
             button__p_height.textContent='Показать';
             none_block_height = none_block_height + 1;
         }

     }
 })

 window.addEventListener('resize', function () {
    "use strict";
     window.location.reload();
 });

