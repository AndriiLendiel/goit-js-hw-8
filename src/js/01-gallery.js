// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import  'simplelightbox/dist/simple-lightbox.min.css';



// Change code below this line



const gallaryList = document.querySelector('.gallery');


function makeGallarylist() {
return galleryItems.map(
    ({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

}
gallaryList.innerHTML = makeGallarylist();

  let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"})

