import{a as s,S as p,i as l}from"./assets/vendor-CIF6YjI2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function f(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=f(r);fetch(r.href,a)}})();s.defaults.baseURL="https://pixabay.com/api/";s.defaults.params={key:"56291655-46a36a1bb1a9da85580c7f68a"};function h(e){return s.get("",{params:{q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).then(t=>t.hits)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),m=new p(".gallery a",{captionsData:"alt",captionSelector:"img",captionDelay:250});function y(e){u.innerHTML=e.map(L).join("")}function g(){u.innerHTML=""}function v(){d.classList.add("visible")}function c(){d.classList.remove("visible")}function L(e){return`
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
`}const o={usrSearch:document.querySelector("input"),usrAction:document.querySelector("[type=submit]")};o.usrAction.addEventListener("click",e=>{e.preventDefault(),g(),v(),h(o.usrSearch.value).then(t=>{if(c(),t.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.usrSearch.value="";return}y(t),o.usrSearch.value="",m.refresh()}).catch(t=>{c(),l.error({message:"Something went wrong!",position:"topRight"})})});
//# sourceMappingURL=index.js.map
