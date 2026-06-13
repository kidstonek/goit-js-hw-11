
export function createGallery(images) {
    return images.map(image).join('');
}

export function clearGallery() {}

export function showLoader() {}

export function hideLoader() {}

function image(img) {
  return `
          <li class="gallery-item">
            <a class="gallery-link" href="${img.largeImageURL}">
              <img
                src=${img.previewURL}
                alt=${img.tags.replace(",", "")}
                width="360"
                height="200"
                data-source="${img.largeImageURL}"
              />
            </a>
            <div class="gallery-item-info">
              <h4>Likes</h4>
              <p>${img.likes}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Views</h4>
              <p>${img.views}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Comments</h4>
              <p>${img.comments}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Downloads</h4>
              <p>${img.downloads}</p>
            </div>
          </li>
`
}


function imagesAll(imgs) {
  return imgs.map(image).join('');
}