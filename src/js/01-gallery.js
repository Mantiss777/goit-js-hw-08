// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const container = document.querySelector('.gallery');

function addGallery(galleryItems) {
  const makeGallerylink = galleryItems
    .map(
      image =>
        `<a class="gallery__item" href="${image.original}">
			<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
		</a>`
    )
    .join('');

  container.insertAdjacentHTML('beforeend', makeGallerylink);

  return container;
}

addGallery(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox');
