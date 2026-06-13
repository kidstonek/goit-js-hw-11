import{a as l,S as c,i as u}from"./assets/vendor-BTRK9AdA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";l.defaults.params={key:"56291655-46a36a1bb1a9da85580c7f68a"};function d(e){return l.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data).then(a=>a.hits)}function p(e){return e.map(f).join("")}function f(e){return`
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
`}const i={usrSearch:document.querySelector("input"),usrAction:document.querySelector("[type=submit]"),usrGallery:document.querySelector(".gallery")},h=new c(".gallery a",{captionsData:"alt",captionSelector:"img",captionDelay:250});i.usrAction.addEventListener("click",e=>{e.preventDefault(),d(i.usrSearch.value).then(a=>{if(a.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.usrSearch.value="";return}const s=p(a);i.usrGallery.innerHTML=s,i.usrSearch.value="",h.refresh()})});
//# sourceMappingURL=index.js.map
