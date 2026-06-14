import{a as l,S as u,i as c}from"./assets/vendor-BTRK9AdA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();l.defaults.baseURL="https://pixabay.com/api/";l.defaults.params={key:"56291655-46a36a1bb1a9da85580c7f68a"};function d(e){return l.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).then(t=>t.hits)}function p(e){return e.map(f).join("")}function f(e){return`
          <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                src=${e.previewURL}
                alt=${e.tags.replace(",","")}
                width="360"
                height="200"
                data-source="${e.largeImageURL}"
              />
            </a>
            <div class="gallery-item-info">
              <h4>Likes</h4>
              <p>${e.likes}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Views</h4>
              <p>${e.views}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Comments</h4>
              <p>${e.comments}</p>
            </div>
            <div class="gallery-item-info">
              <h4>Downloads</h4>
              <p>${e.downloads}</p>
            </div>
          </li>
`}const s={usrSearch:document.querySelector("input"),usrAction:document.querySelector("[type=submit]"),usrGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h=new u(".gallery a",{captionsData:"alt",captionSelector:"img",captionDelay:250});s.usrAction.addEventListener("click",e=>{e.preventDefault(),s.loader.classList.add("visible"),d(s.usrSearch.value).then(t=>{if(s.loader.classList.remove("visible"),t.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.usrSearch.value="";return}const i=p(t);s.usrGallery.innerHTML=i,s.usrSearch.value="",h.refresh()}).catch(t=>{s.loader.classList.remove("visible"),c.error({message:"Something went wrong!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
