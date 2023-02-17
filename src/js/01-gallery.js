// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
const gallery = document.querySelector(".gallery");
for (let item of galleryItems) {
    let largeImg = item.original; 
    let smallImg = item.preview;
    let description = item.description;
gallery.insertAdjacentHTML('beforeend', `<div class= "gallery__item">
  <a class="gallery__link" href="${largeImg}">
    <img
      class="gallery__image"
      src="${smallImg}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`)
};

const selectImg = (event) => {
  if (event.target.nodeName !== "IMG")
   return;
  const selectedImg = event.target.parentNode.href;
  event.preventDefault();
  const instance = basicLightbox.create(`<img src="${selectedImg}" width = "800" height = "600">`,
    {
      onShow: () =>
        document.addEventListener("keydown", handleKeyDown),
      onClose: () =>
        document.removeEventListener("keydown", handleKeyDown),
    }
  );
  instance.show();
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      instance.close();
    };
  };  
};
gallery.addEventListener("click", selectImg);

console.log(galleryItems);
