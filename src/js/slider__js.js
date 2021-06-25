
var width=document.documentElement.clientWidth;

var slide=[];
var button=document.querySelector('.button__show')
slide=document.querySelectorAll('.slide_stock');
var button_transform=document.querySelector('.button__img');
var button__p=document.querySelector('.button__p');
button__p.textContent='Показать';
if (width<=767) {
    const swiper = new Swiper('.swiper-container_stock', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination_stock',
        },
        // Navigation arrows

    });
}else {
    if (width <= 1119) {
        if (slide.length > 6) {
            for (var i = 6; i < slide.length; i++) {
                slide[i].style.display = "none";

            }


        }
    } else{
        for ( i = 8; i < slide.length; i++) {
            slide[i].style.display = 'none';

        }

    }
}
var none_block=1;
 button.addEventListener("click", function () {
     if (width <= 1119) {
         if (none_block === 1) {
             for (var i = 6; i < slide.length; i++) {
                 slide[i].style.display = 'flex';

             }
             button_transform.classList.add('button_transform');
             button__p.textContent='Скрыть';
             none_block = none_block - 1;
         } else {
             for (var i = 6; i < slide.length; i++) {
                 slide[i].style.display = 'none';
             }
             button_transform.classList.remove('button_transform');
             button__p.textContent='Показать';
             none_block = none_block + 1;
         }
     } else{
         if (none_block === 1) {
             for (var i = 8; i < slide.length; i++) {
                 slide[i].style.display = 'flex';

             }
             button_transform.classList.add('button_transform');
             button__p.textContent='Скрыть';
             none_block = none_block - 1;
         } else {
             for (var i = 8; i < slide.length; i++) {
                 slide[i].style.display = 'none';
             }
             button_transform.classList.remove('button_transform');
             button__p.textContent='Показать';
             none_block = none_block + 1;
         }

     }
 })

 window.addEventListener('resize', function () {
    "use strict";
     window.location.reload();
 });

