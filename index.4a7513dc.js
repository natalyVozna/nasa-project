var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire3ac4;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire3ac4=o);var n=o("duaIP");const i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0],a={letterBox:document.querySelector(".hero__letter-box"),selectLetter:document.querySelector("#letter")};window.innerWidth>767?function(){let e=i;e.splice(-10,0," ");const t=e.map((e=>`<div class="hero__letter " data-letter="${e}">${isNaN(e)?e.toUpperCase():e}</div>`)).join("");a.letterBox.insertAdjacentHTML("beforeend",t)}():function(){const e=i.map((e=>`<option value="${e}">${isNaN(e)?e.toUpperCase():e}</option>`)).join("");a.selectLetter.insertAdjacentHTML("beforeend",e)}(),a.letterBox.addEventListener("click",(function(e){if(!e.target.classList.contains("hero__letter"))return;const t=e.target.dataset.letter,r=e.target,o=document.querySelector(".hero__letter.active");o&&o.classList.remove("active");r.classList.add("active"),(0,n.requestApi)(t,"letter").then((e=>console.log("data",e)))}));
//# sourceMappingURL=index.4a7513dc.js.map
