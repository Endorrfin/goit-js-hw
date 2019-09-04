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
  * Создай галерею с возможностью просмотра полноразмерного изображения в модальном окне. Превью результата посмотри по ссылке.
  * Необходимо динамически создать элементы галереи по указанному шаблону.
  * При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. 
  * Обязательно используй делегирование событий и слушай клики на элементе ul.gallery.
  * Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], по клику на div.overlay или по нажатию ESC.
  */
}

import galleryShow from './gallery-items.js';

// ********** IMPLEMENTATION OF THE STRUCTURE DOM ACCODANCE WITH THE TEMPLATE **********

const galleryList = document.querySelector('.js-gallery');

galleryShow.forEach(picture => {
  function addGalleryImages( {preview, original, description} ) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery_item');

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery_image');
    galleryImg.setAttribute('src', preview);
    galleryImg.setAttribute('data-source', original);
    galleryImg.setAttribute('alt', description);

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery_link');
    const atributeDataSource = galleryImg.getAttribute('data-source');
    galleryLink.setAttribute('href', atributeDataSource);

    const gallerySpan = document.createElement('span');
    gallerySpan.classList.add('gallery_icon')

    const galleryItalic = document.createElement('i');
    galleryItalic.classList.add('material_icons');
    galleryItalic.textContent = 'zoom_out_map';

    gallerySpan.append(galleryItalic);
    galleryLink.append(galleryImg);
    galleryLink.append(gallerySpan);
    galleryItem.append(galleryLink);
    galleryList.append(galleryItem);

  }
  addGalleryImages(picture);

});


// ********** IMPLEMENTAION OF THE FUNCTIONALITY OF GALLERY_SHOW **********

const moddalLightbox =document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.js-lightbox_image');
const lightboxButton = document.querySelector('buton[data-action="clse-lightbox"]');
const backdropContent = document.querySelector('.js-lightbox-constent');

galleryList.addEventListener('click', openModal);
lightboxButton.addEventListener('click', closeModal);
backdropContent.addEventListener('click', handleBackdrop);

function openModal(e) {
  e.preventDefault();
  window.addEventListener('keyDown', handleKeyPress);
  if (e.target === e.currentTarget) {
    return;
  }
}

moddalLightbox.classList.add('is-open');

const atributeSrc = e.target.getAttribute('data-source');
const atributeAlt = e.target.getAttribute('alt');
lightboxImage.setAttribute('src', atributeSrc);
lightboxImage.setAttribute('alt', atributeAlt);


function closeModal () {
  moddalLightbox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
}

function handleBackdrop (e) {
  if (e.target === e.currentTarget) {
    return;
  }
  closeModal();
}

function handleKeyPress (e) {
  if (e.code !== 'Escape') {
    return;
  }
  closeModal();
}




