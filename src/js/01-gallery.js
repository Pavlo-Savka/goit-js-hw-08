// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const basicLightbox = require("simplelightbox");
const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
    let largeImg = item.original; 
    let smallImg = item.preview;
    let description = item.description;
gallery.insertAdjacentHTML('beforeend', `<div class= "gallery__item">
  <a href="${largeImg}">
    <img
      src="${smallImg}"
      alt="${description}"
    />
  </a>
</div>`)
};

new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
 });

console.log(galleryItems);
