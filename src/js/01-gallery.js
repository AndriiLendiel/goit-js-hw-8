// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallaryList = document.querySelector('.gallery');


gallaryList.innerHTML = createList();




function createList() {
  return galleryItems.map(
    ({description, original,preview}) => {
 return   `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
}).join('')}
console.log(createList());
  gallaryList.addEventListener('click', onGallaryClick);



function onGallaryClick(e) {
    e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${e.target.dataset.source}" alt="${e.target.alt}">
  </div>
`)
instance.show()
gallaryList.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    instance.close();
  }
   });

  }