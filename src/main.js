import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";


const refs = {
    usrSearch: document.querySelector('input'),
    usrAction: document.querySelector('[type=submit]'),
    usrGallery: document.querySelector('.gallery')
}

const gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionSelector: 'img',
        captionDelay: 250,
        });

refs.usrAction.addEventListener('click', (e) => {
    e.preventDefault();
    getImagesByQuery(refs.usrSearch.value).then(some => {
        if (some.length === 0) {
            iziToast.error({
               message: 'Sorry, there are no images matching your search query. Please try again!',
               position: 'topRight'
            }
            )
            refs.usrSearch.value = '';
            return
        }
        const myGal = createGallery(some)
        refs.usrGallery.innerHTML = myGal
        refs.usrSearch.value = '';
        gallery.refresh()
    })
    
})




