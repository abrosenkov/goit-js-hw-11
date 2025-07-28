import{a as h,S as b,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const v="51523631-287343b93ff65c0abc5c9078c",L="https://pixabay.com/api/";function S(o){return h.get(L,{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(i=>i.data).catch(i=>console.log(i))}const f=document.querySelector(".gallery"),u=document.querySelector(".loader");function w(o){const i=o.map(n=>{const{webformatURL:e,largeImageURL:t,tags:r,likes:d,views:p,comments:g,downloads:y}=n;return`<li class="list-item">
      <a href="${t}" class="item-img-link">
        <img src="${e}" alt="${r}" />
      </a>
      <div class="img-info-wrap">
        <div class="img-info">
          <p class="img-info-title">Likes</p>
          <p class="img-info-content">${d}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Views</p>
          <p class="img-info-content">${p}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${g}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${y}</p>
        </div>
      </div>
    </li>`}).join("");f.insertAdjacentHTML("beforeend",i),new b(".item-img-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function q(){f.innerHTML=""}function O(){u.style.display="block"}function m(){u.style.display="none"}const c=document.querySelector(".form"),a=document.querySelector('button[type="submit"]'),$=document.querySelector('input[name="search-text"]');async function x(o){o.preventDefault(),O(),a.disabled=!0,q();const i=$.value.trim();if(i===""){l.error({title:"",color:"red",message:"❌ Search field cannot be empty!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1});return}const s=await S(i);if(!s.hits.length){l.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),setTimeout(()=>{c.reset()},1500),a.disabled=!1,m();return}w(s.hits),c.reset(),a.disabled=!1,m()}c.addEventListener("submit",x);
//# sourceMappingURL=index.js.map
