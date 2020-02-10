**Используем следующие бибилиотеки**


*  [carousel slider](https://glidejs.com/docs/setup/)
```javascript
    var glide = new Glide('#intro', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        breakpoints: {
            800: {
                perView: 2
            },
            480: {
                perView: 1
            }
        }
    })
    glide.mount()
```

*  [slider](https://nickpiscitelli.github.io/Glider.js/)
```javascript
    new Glider(document.querySelector('.intro__slider'), {
    		slidesToShow: 1,
    		draggable: true,
    });
```
*  [scrollbar](https://github.com/buzinas/simple-scrollbar)
```javascript
 SimpleScrollbar.initEl(document.querySelector('.scrollbar-inner'));
```



**Lazy loading**

Добавляем в основной файл

```js
function loadLazyImages() {
	var lazyIimage = document.querySelectorAll(".lazy-image");
	lazyIimage.forEach(elemItem => {
		if (elemItem.hasAttribute('data-src')) {
			elemItem.setAttribute('src', elemItem.dataset.src);
			elemItem.onload = function() {
				window.dispatchEvent(new Event('resize'));
			};
		}
	});
}

function loadLazyBackgrounds() {
	var lazyIimage = document.querySelectorAll(".lazy-background");
	lazyIimage.forEach(elemItem => {
		if (elemItem.hasAttribute('data-style')) {
			elemItem.setAttribute('style', elemItem.dataset.style);
		}
	});
}

document.addEventListener("DOMContentLoaded", ready);

function ready() {
	loadLazyImages();
	document.dispatchEvent(new Event('mainPageLoaded'));
	loadLazyBackgrounds();
}

document.addEventListener('mainPageLoaded', function () {
    //Остальной js
});
```

У всех изображений кроме иконок добавляем класс "lazy-image"

```html
   <img data-src="......" class="lazy-image">
```

Если картинка вставляется фоном то указываем класс "lazy-background"

```html
   <div class="main_logos_item__logo lazy-background" data-style="background: url(.....) no-repeat; "></div>
```


test
