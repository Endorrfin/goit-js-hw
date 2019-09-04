// =============== <<<--- ЗАДАНИЕ --->>>  ===============

const galleryItems = [
  {
    preview: "/img/preview-1.jpg",
    fullview: "img/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "/img/preview-2.jpg",
    fullview: "img/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "/img/preview-3.jpg",
    fullview: "img/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "/img/preview-4.jpg",
    fullview: "img/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "/img/preview-5.jpg",
    fullview: "img/fullview-5.jpg",
    alt: "alt text 5"
  },
  {
    preview: "/img/preview-6.jpg",
    fullview: "img/fullview-6.jpg",
    alt: "alt text 6"
  }
];


const refs = {
  imageGallery: document.querySelector(".image-gallery"),
  preview: document.querySelector(".preview"),
  fullview: document.querySelector(".fullview"),
};

// console.log(refs.fullview);
// refs.fullview.innerHTML = `<img src='${galleryItems[0].fullview}'/>`; // вставка через innerHTML
// const firsImageInDocument = `<`

refs.fullview.insertAdjacentHTML(
  "afterbegin",
  `<img src='${galleryItems[0].fullview}'/>`
);




// galleryItems.reduce((acc, {preview, fullview, alt}) => {
//   // const result = acc + `<li><img src="img/preview-1.jpg" data-fullview="img/fullview-1.jpg" alt="alt text 1"></li>`
//   acc + refs.preview.innerHTML += `<li><img src="${preview}" data-fullview="${fullviwe}" alt="${alt}"></li>`;
// }, '');


const result = galleryItems
.map(
  ({preview, fullview, alt}) => 
  `<li><img src="${preview}" data-fullview="${fullview}" alt="${alt}"></li>`
)
.join("");


refs.preview.insertAdjacentHTML("beforeend", result);
 
// Вешаем слушателя на картинки
const handlePreviewImage = event => {
  console.log(event.target);
  console.log(event.target.dataset.fullview);
  refs.fullview.innerHTML = `<img src='${event.target.dataset.fullview}'/>`;
};

refs.preview.addEventListener('click', handlePreviewImage);
