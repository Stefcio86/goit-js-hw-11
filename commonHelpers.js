import{i,a as d,S as u}from"./assets/vendor-752768de.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f="YOUR_PIXABAY_API_KEY",m="https://pixabay.com/api/",y=document.getElementById("search-form"),l=document.getElementById("gallery"),c=document.getElementById("loading-indicator");y.addEventListener("submit",p);function p(n){n.preventDefault();const t=n.target.query.value.trim();t?g(t):i.error({title:"Error",message:"Please enter a search query"})}async function g(n){L(),b();try{const t=await d.get(m,{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}});t.data.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.data.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{w()}}function h(n){const t=n.map(o=>`
    <a href="${o.largeImageURL}" class="gallery-item">
      <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy"/>
      <div class="info">
        <p><b>Likes:</b> ${o.likes}</p>
        <p><b>Views:</b> ${o.views}</p>
        <p><b>Comments:</b> ${o.comments}</p>
        <p><b>Downloads:</b> ${o.downloads}</p>
      </div>
    </a>
  `).join("");l.innerHTML=t,new u(".gallery a").refresh()}function b(){l.innerHTML=""}function L(){c.style.display="block"}function w(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
