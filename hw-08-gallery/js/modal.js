
// ********** IMPLEMENTAION OF THE FUNCTIONALITY OF GALLERY_SHOW **********



const gallery = document.querySelector('.js-gallery');
const moddalLightbox =document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.js-lightbox_image');
const lightboxButton = document.querySelector('button[data-action="close-modal"]');
const backdropContent = document.querySelector('.js-lightbox_content');


gallery.addEventListener('click', openModal);
lightboxButton.addEventListener('click', closeModal);
backdropContent.addEventListener('click', handleBackdrop);


function openModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', handleKeyPress);
  if (e.target === e.currentTarget) {
    return;
  }
  
  moddalLightbox.classList.add('is-open');
  
  const atributeSrc = e.target.getAttribute('data-source');
  const atributeAlt = e.target.getAttribute('alt');
  lightboxImage.setAttribute('src', atributeSrc);
  lightboxImage.setAttribute('alt', atributeAlt);
}


function closeModal () {
  moddalLightbox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
}

function handleBackdrop(e) {
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



