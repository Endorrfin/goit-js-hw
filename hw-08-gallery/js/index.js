// =============== <<<--- HOME TASK #8 - GALLERY SHOW --->>>  ===============
{
  /*
  *   <li class="gallery__item">
  *   <a
  *     class="gallery__link"
  *     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  *   >
  *     <img
  *       class="gallery__image"
  *       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
  *       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  *       alt="Tulips"
  *     />
  *     <span class="gallery__icon">
  *       <i class="material-icons">zoom_out_map</i>
  *     </span>
  *   </a>
  * </li>
  * 
  * 
  * Задание
  * Создай галерею с возможностью просмотра полноразмерного изображения в модальном окне.
  * Необходимо динамически создать элементы галереи по указанному шаблону.
  * При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. 
  * Обязательно используй делегирование событий и слушай клики на элементе ul.gallery.
  * Модальное окно должно закрываться по клику:
  *   на кнопку button[data-action="close-modal"], 
  *   по клику на div.overlay 
  *   по нажатию ESC.
  */
}

import galleryShow from './gallery-items.js';




// ********** IMPLEMENTATION OF THE STRUCTURE DOM ACCODANCE WITH THE TEMPLATE **********

const gallery = document.querySelector('.js-gallery');

galleryShow.forEach(picture => {
  function addGalleryImages({preview, original, description}) {
    const li = document.createElement('li');
    li.classList.add('gallery_item');

    const img = document.createElement('img');
    img.classList.add('gallery_image');
    img.setAttribute('src', preview);
    img.setAttribute('data-source', original);
    img.setAttribute('alt', description);
 

    const a = document.createElement('a');
    a.classList.add('gallery_link');
    const attributeDataSource = img.getAttribute('data-source');
    a.setAttribute('href', attributeDataSource);

    const span = document.createElement('span');
    span.classList.add('gallery_icon');

    const i = document.createElement('i');
    i.classList.add('material-icons');
    i.textContent = 'zoom_out_map';

    span.append(i);
    a.append(img);
    a.append(span);
    li.append(a);
    gallery.append(li);
  }
  addGalleryImages(picture);
});