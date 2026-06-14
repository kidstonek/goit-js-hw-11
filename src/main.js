import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';


import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, showLoader, hideLoader, gallery, clearGallery } from "./js/render-functions";


const refs = {
    usrSearch: document.querySelector('input'),
    usrForm: document.querySelector('form'),
}


refs.usrForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!refs.usrSearch.value.trim()) return;
    clearGallery()
    showLoader()

    getImagesByQuery(refs.usrSearch.value).then(some => {
        hideLoader()
        if (some.length === 0) {
            iziToast.error({
               message: 'Sorry, there are no images matching your search query. Please try again!',
               position: 'topRight'
            }
            )
            refs.usrSearch.value = '';
            return
        }
        
        createGallery(some)
        refs.usrSearch.value = '';
        gallery.refresh()
    }).catch(err => {
        hideLoader()
        refs.usrSearch.value = '';
    iziToast.error({ message: 'Something went wrong!', position: 'topRight' });
    })
    
})

